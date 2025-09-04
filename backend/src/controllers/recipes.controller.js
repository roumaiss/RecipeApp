import { and, eq } from "drizzle-orm"; // adjust depending on your ORM
import { recipeTable } from "../db/schema.js";
import { db } from "../config/db.js";

export const getRecipies = async (req, res) => {
  try {
    let { userId, category, page = 1, limit = 10 } = req.query;

    // Convert query params to numbers
    page = Number(page);
    limit = Number(limit);

    const offset = (page - 1) * limit;

    // Start query
    let conditions = [];

    if (userId) {
      conditions.push(eq(recipeTable.userId, userId));
    }
    if (category) {
      conditions.push(eq(recipeTable.categoryId, parseInt(category)));
    }

    let query = db.select().from(recipeTable).limit(limit).offset(offset);

    // Apply conditions if they exist
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const recipes = await query;

    res.status(200).json({
      page,
      limit,
      count: recipes.length,
      recipes,
    });
  } catch (error) {
    console.log("Error fetching the recipes", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const addRecipe = async (req, res) => {
  try {
    const data = req.body;
    const newRecipe = await db.insert(recipeTable).values(data).returning();
    res.status(201).json({ success: "Created successfully" }, newRecipe[0]);
  } catch (error) {
    console.log("Error adding recipe", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const data = req.body;
    // Check recipe ownership
    const [recipe] = await db
      .select()
      .from(recipeTable)
      .where(eq(recipeTable.id, recipeId));
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    if (recipe.userId !== data.userId) {
      return res
        .status(403)
        .json({ error: "You are not allowed to update this recipe" });
    }

    const updatedRecipes = await db
      .update(recipeTable)
      .set(data)
      .where(eq(recipeTable.id, recipeId))
      .returning();

    res.json({ message: "Recipe updated successfully" }, updatedRecipes[0]);
  } catch (error) {
    console.log("Error updating recipe", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const userId = req.auth.userId;

    // Check recipe ownership
    const [recipe] = await db
      .select()
      .from(recipeTable)
      .where(eq(recipeTable.id, recipeId));
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    if (recipe.userId !== userId) {
      return res
        .status(403)
        .json({ error: "You are not allowed to delete this recipe" });
    }
    await db.delete(recipeTable).where(eq(recipeTable.id, recipeId));
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.log("Error deleting recipe", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
