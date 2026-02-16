import { json } from "@sveltejs/kit";
import prisma from "../../../../../../chunks/db.js";
async function POST({ params, request, cookies }) {
  try {
    const userId = cookies.get("userId");
    const { id } = await params;
    const { rating } = await request.json();
    if (!userId) {
      return json(
        { error: "You must be logged in to rate a recipe" },
        { status: 401 }
      );
    }
    if (!rating || rating < 1 || rating > 5) {
      return json(
        { error: "Rating must be between 1 and 5" },
        { status: 400 }
      );
    }
    const existingRating = await prisma.rating.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId: id
        }
      }
    });
    let savedRating;
    if (existingRating) {
      savedRating = await prisma.rating.update({
        where: {
          userId_recipeId: {
            userId,
            recipeId: id
          }
        },
        data: { rating: parseInt(rating) },
        include: {
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      });
    } else {
      savedRating = await prisma.rating.create({
        data: {
          userId,
          recipeId: id,
          rating: parseInt(rating)
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
    }
    const recipe = await prisma.recipe.findUnique({
      where: { id },
      include: { ratings: true }
    });
    const avgRating = recipe && recipe.ratings.length > 0 ? recipe.ratings.reduce((sum, r) => sum + r.rating, 0) / recipe.ratings.length : 0;
    return json({
      rating: savedRating,
      avgRating: Math.round(avgRating * 10) / 10
    });
  } catch (error) {
    console.error("Error creating rating:", error);
    return json(
      { error: "Failed to create rating" },
      { status: 500 }
    );
  }
}
export {
  POST
};
