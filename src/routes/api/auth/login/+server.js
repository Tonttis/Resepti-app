import { json } from '@sveltejs/kit';
import prisma from '$lib/db.js';
import { comparePassword } from '$lib/password.js';

export async function POST({ request, cookies }) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!user) {
      return json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await comparePassword(password, user.password);

    if (!isValidPassword) {
      return json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Set session cookie
    cookies.set('userId', user.id, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return json({
      message: 'Login successful',
      user: userWithoutPassword,
    }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
}
