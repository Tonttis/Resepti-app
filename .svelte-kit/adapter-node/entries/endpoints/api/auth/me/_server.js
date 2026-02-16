import { json } from "@sveltejs/kit";
async function GET({ cookies }) {
  try {
    const userId = cookies.get("userId");
    if (!userId) {
      return json(
        { user: null, authenticated: false },
        { status: 200 }
      );
    }
    const prisma = (await import("../../../../../chunks/db.js")).default;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true
      }
    });
    if (!user) {
      cookies.delete("userId", { path: "/" });
      return json(
        { user: null, authenticated: false },
        { status: 200 }
      );
    }
    return json({
      user,
      authenticated: true
    }, { status: 200 });
  } catch (error) {
    console.error("Session check error:", error);
    return json(
      { user: null, authenticated: false },
      { status: 500 }
    );
  }
}
export {
  GET
};
