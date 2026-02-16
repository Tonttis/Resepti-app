import { json } from '@sveltejs/kit';

export async function POST({ cookies }) {
  try {
    cookies.delete('userId', {
      path: '/',
    });

    return json({ message: 'Logout successful' }, { status: 200 });
  } catch (error) {
    console.error('Logout error:', error);
    return json(
      { error: 'Failed to logout' },
      { status: 500 }
    );
  }
}
