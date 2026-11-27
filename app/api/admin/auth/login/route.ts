import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, createSessionToken, COOKIE_NAME } from '@/lib/auth';
import { ensureDatabaseInitialized } from '@/lib/dbInit';
import { checkRateLimit, resetRateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rateCheck = checkRateLimit(`login_${ip}`, 5, 15 * 60 * 1000);

    if (!rateCheck.allowed) {
      const waitMinutes = Math.ceil((rateCheck.resetTime - Date.now()) / 60000);
      return NextResponse.json(
        {
          error: `Too many failed login attempts. Please try again in ${waitMinutes} minute${waitMinutes > 1 ? 's' : ''}.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Ensure database tables and default admin user exist
    try {
      await ensureDatabaseInitialized();
    } catch (initErr: any) {
      console.error('Database auto-initialization error:', initErr);
      return NextResponse.json({
        error: 'Database connection failed',
        details: initErr.message || String(initErr)
      }, { status: 500 });
    }

    const admin = await prisma.adminUser.findUnique({
      where: { email: email.toLowerCase().trim() },
    });

    if (!admin || !admin.isActive) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const isValid = verifyPassword(password, admin.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Successful authentication: clear rate limit
    resetRateLimit(`login_${ip}`);

    const sessionUser = {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role,
    };

    const token = createSessionToken(sessionUser);

    const response = NextResponse.json({
      success: true,
      user: sessionUser,
      token,
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Authentication failed', details: error.message }, { status: 500 });
  }
}

