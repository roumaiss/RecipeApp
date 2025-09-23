import axios from "axios";

export const getRecipes = async ({ search, userId, limit }) => {
  try {
    let url = `${process.env.EXPO_PUBLIC_BASE_URL}/api/recipes`;

    const params = new URLSearchParams();

    if (search && search.trim()) {
      params.append("search", search.trim());
    }
    if (userId) {
      params.append("userId", userId);
    }
    if (limit) {
      params.append("limit", limit);
    }

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    console.log("Fetching URL:", url);

    const res = await axios.get(url);
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
