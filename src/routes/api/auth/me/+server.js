import { json } from '@sveltejs/kit';

export async function GET({ cookies }) {
  try {
    const userId = cookies.get('userId');

    if (!userId) {
      return json(
        { user: null, authenticated: false },
        { status: 200 }
      );
    }

    const prisma = (await import('$lib/db.js')).default;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (!user) {
      // User doesn't exist, clear cookie
      cookies.delete('userId', { path: '/' });
      return json(
        { user: null, authenticated: false },
        { status: 200 }
      );
    }

    return json({
      user,
      authenticated: true,
    }, { status: 200 });
  } catch (error) {
    console.error('Session check error:', error);
    return json(
      { user: null, authenticated: false },
      { status: 500 }
    );
  }
}
