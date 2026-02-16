import "@sveltejs/kit";
const handle = async ({ event, resolve }) => {
  try {
    const session = event.cookies.get("userId");
    if (!session) {
      return resolve(event);
    }
    const prisma = (await import("../chunks/db.js")).default;
    const user = await prisma.user.findUnique({
      where: { id: session },
      select: {
        id: true,
        email: true,
        name: true
      }
    });
    if (!user) {
      event.cookies.delete("userId", { path: "/" });
      return resolve(event);
    }
    return resolve(event);
  } catch (error) {
    console.error("Hook error:", error);
    return resolve(event);
  }
};
const handleError = ({ event, error }) => {
  const message = error?.message || "Internal Error";
  console.error("Server error:", message);
  return new Response(
    JSON.stringify({ error: message }),
    {
      status: error?.status || 500,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
export {
  handle,
  handleError
};
