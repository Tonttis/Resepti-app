import { json } from "@sveltejs/kit";
import prisma from "../../../../chunks/db.js";
async function GET({ url }) {
  try {
    const search = url.searchParams.get("search");
    const recipes = await prisma.recipe.findMany({
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        ratings: true,
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
      },
      orderBy: {
        createdAt: "desc"
      }
    });
    let filteredRecipes = recipes;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredRecipes = recipes.filter(
        (recipe) => recipe.ingredients.toLowerCase().includes(searchLower) || recipe.title.toLowerCase().includes(searchLower)
      );
    }
    const recipesWithAvgRating = filteredRecipes.map((recipe) => {
      const avgRating = recipe.ratings.length > 0 ? recipe.ratings.reduce((sum, r) => sum + r.rating, 0) / recipe.ratings.length : 0;
      return {
        ...recipe,
        avgRating: Math.round(avgRating * 10) / 10,
        _count: {
          ratings: recipe.ratings.length,
          comments: recipe.comments.length
        }
      };
    });
    return json(recipesWithAvgRating);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return json(
      { error: "Failed to fetch recipes" },
      { status: 500 }
    );
  }
}
async function POST({ request, cookies }) {
  try {
    const userId = cookies.get("userId");
    if (!userId) {
      return json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const body = await request.json();
    const { title, description, ingredients, instructions, cookTime, servings, imageUrl } = body;
    if (!title || !description || !ingredients || !instructions || !cookTime || !servings) {
      return json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        ingredients,
        instructions,
        cookTime: parseInt(cookTime),
        servings: parseInt(servings),
        imageUrl: imageUrl || null,
        authorId: userId
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
    return json(recipe, { status: 201 });
  } catch (error) {
    console.error("Error creating recipe:", error);
    return json(
      { error: "Failed to create recipe" },
      { status: 500 }
    );
  }
}
export {
  GET,
  POST
};
