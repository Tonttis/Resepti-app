import { json } from "@sveltejs/kit";
import prisma from "../../../../../../chunks/db.js";
async function POST({ params, request, cookies }) {
  try {
    const userId = cookies.get("userId");
    const { id } = await params;
    const { text } = await request.json();
    if (!userId) {
      return json(
        { error: "You must be logged in to comment" },
        { status: 401 }
      );
    }
    if (!text || !text.trim()) {
      return json(
        { error: "Comment text is required" },
        { status: 400 }
      );
    }
    const comment = await prisma.comment.create({
      data: {
        userId,
        recipeId: id,
        text: text.trim()
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
    return json(comment, { status: 201 });
  } catch (error) {
    console.error("Error creating comment:", error);
    return json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
async function GET({ params }) {
  try {
    const { id } = await params;
    const comments = await prisma.comment.findMany({
      where: { recipeId: id },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    return json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}
export {
  GET,
  POST
};
