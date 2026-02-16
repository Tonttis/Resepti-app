import { json } from "@sveltejs/kit";
import prisma from "../../../../../chunks/db.js";
async function GET({ params, cookies }) {
  try {
    const userId = cookies.get("userId");
    const { id } = await params;
    const recipe = await prisma.recipe.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        ratings: {
          include: {
            user: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        comments: {
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
        }
      }
    });
    if (!recipe) {
      return json(
        { error: "Recipe not found" },
        { status: 404 }
      );
    }
    const avgRating = recipe.ratings.length > 0 ? recipe.ratings.reduce((sum, r) => sum + r.rating, 0) / recipe.ratings.length : 0;
    const recipeWithAvgRating = {
      ...recipe,
      avgRating: Math.round(avgRating * 10) / 10,
      _count: {
        ratings: recipe.ratings.length,
        comments: recipe.comments.length
      }
    };
    if (userId) {
      recipeWithAvgRating.canEdit = recipe.authorId === userId;
    }
    return json(recipeWithAvgRating);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return json(
      { error: "Failed to fetch recipe" },
      { status: 500 }
    );
  }
}
async function PUT({ params, request, cookies }) {
  try {
    const userId = cookies.get("userId");
    const { id } = await params;
    const { title, description, ingredients, instructions, cookTime, servings, imageUrl } = await request.json();
    const recipe = await prisma.recipe.findUnique({
      where: { id }
    });
    if (!recipe) {
      return json(
        { error: "Recipe not found" },
        { status: 404 }
      );
    }
    if (recipe.authorId !== userId) {
      return json(
        { error: "You can only edit your own recipes" },
        { status: 403 }
      );
    }
    const updatedRecipe = await prisma.recipe.update({
      where: { id },
      data: {
        ...title && { title },
        ...description !== void 0 && { description },
        ...ingredients && { ingredients },
        ...instructions && { instructions },
        ...cookTime !== void 0 && { cookTime: parseInt(cookTime) },
        ...servings !== void 0 && { servings: parseInt(servings) },
        ...imageUrl !== void 0 && { imageUrl }
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });
    return json(updatedRecipe);
  } catch (error) {
    console.error("Error updating recipe:", error);
    return json(
      { error: "Failed to update recipe" },
      { status: 500 }
    );
  }
}
async function DELETE({ params, cookies }) {
  try {
    const userId = cookies.get("userId");
    const { id } = await params;
    const recipe = await prisma.recipe.findUnique({
      where: { id }
    });
    if (!recipe) {
      return json(
        { error: "Recipe not found" },
        { status: 404 }
      );
    }
    if (recipe.authorId !== userId) {
      return json(
        { error: "You can only delete your own recipes" },
        { status: 403 }
      );
    }
    await prisma.recipe.delete({
      where: { id }
    });
    return json({ success: true });
  } catch (error) {
    console.error("Error deleting recipe:", error);
    return json(
      { error: "Failed to delete recipe" },
      { status: 500 }
    );
  }
}
export {
  DELETE,
  GET,
  PUT
};
