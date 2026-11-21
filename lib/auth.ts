import crypto from 'crypto';
import { NextRequest } from 'next/server';
import { prisma } from './prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'onevitiligo-super-admin-secret-2026';
const COOKIE_NAME = 'onevitiligo_admin_session';

export interface AdminSessionUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

/**
 * Hash password with salt using PBKDF2
 */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

/**
 * Verify password against stored salt:hash
 */
export function verifyPassword(password: string, storedHash: string): boolean {
  try {
    const [salt, originalHash] = storedHash.split(':');
    if (!salt || !originalHash) return false;
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(originalHash));
  } catch {
    return false;
  }
}

/**
 * Create a signed token payload
 */
export function createSessionToken(user: AdminSessionUser): string {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const exp = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60; // 7 days
  const payload = Buffer.from(JSON.stringify({ ...user, exp })).toString('base64url');
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(`${header}.${payload}`)
    .digest('base64url');
  return `${header}.${payload}.${signature}`;
}

/**
 * Verify and decode session token
 */
export function verifySessionToken(token: string): AdminSessionUser | null {
  try {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) return null;

    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(`${header}.${payload}`)
      .digest('base64url');

    if (
      !crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
      )
    ) {
      return null;
    }

    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (data.exp && data.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
    };
  } catch {
    return null;
  }
}

/**
 * Extract admin user from request (checks Authorization header or cookie)
 */
export async function getAdminUserFromRequest(
  req: NextRequest
): Promise<AdminSessionUser | null> {
  // 1. Check Authorization Bearer header
  const authHeader = req.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7);
    const user = verifySessionToken(token);
    if (user) return user;
  }

  // 2. Check Cookie
  const cookie = req.cookies.get(COOKIE_NAME);
  if (cookie?.value) {
    const user = verifySessionToken(cookie.value);
    if (user) return user;
  }

  return null;
}

export { COOKIE_NAME };

