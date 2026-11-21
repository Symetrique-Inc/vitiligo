import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPassword, createSessionToken, COOKIE_NAME } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
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

