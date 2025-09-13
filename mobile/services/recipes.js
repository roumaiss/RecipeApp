import axios from "axios";

export const getRecipes = async () => {
  try {
    const res = await axios.get("http://192.168.100.9:5001/api/recipes");
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};

export const getRecipeById = async (id) => {
  try {
    const allRecipes = await getRecipes();
    const recipe = allRecipes.recipes.find(
      (r) => r.id.toString() === id.toString()
    );

    if (!recipe) {
      throw new Error("Recipe not found");
    }

    return recipe;
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    throw error;
  }
};
