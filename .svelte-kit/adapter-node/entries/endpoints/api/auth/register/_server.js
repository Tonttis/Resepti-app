import { json } from "@sveltejs/kit";
import prisma from "../../../../../chunks/db.js";
import { h as hashPassword } from "../../../../../chunks/password.js";
async function POST({ request, cookies }) {
  try {
    const { email, password, name } = await request.json();
    if (!email || !password) {
      return json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      return json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || email.split("@")[0]
      },
      select: {
        id: true,
        email: true,
        name: true
      }
    });
    cookies.set("userId", user.id, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    });
    return json({
      message: "Registration successful",
      user
    }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}
export {
  POST
};
