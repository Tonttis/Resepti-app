import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
  try {
    const session = event.cookies.get('userId');

    if (!session) {
      return resolve(event);
    }

    const prisma = (await import('$lib/db.js')).default;
    const user = await prisma.user.findUnique({
      where: { id: session },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (!user) {
      event.cookies.delete('userId', { path: '/' });
      return resolve(event);
    }

    return resolve(event);
  } catch (error) {
    console.error('Hook error:', error);
    return resolve(event);
  }
};

export const handleError = ({ event, error }) => {
  const message = error?.message || 'Internal Error';
  console.error('Server error:', message);

  // Return a simple JSON response to avoid SvelteKit's error page issues
  return new Response(
    JSON.stringify({ error: message }),
    {
      status: error?.status || 500,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
