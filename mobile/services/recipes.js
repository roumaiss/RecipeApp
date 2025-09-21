import axios from "axios";

export const getRecipes = async ({ search }) => {
  try {
    // FIX 1: Parameter name should be 'search' not 'debouncedSearchTerm'
    // FIX 2: URL query parameter should use '=' not ':'

    let url = `${process.env.EXPO_PUBLIC_BASE_URL}/api/recipes`;

    // Only add search parameter if search term exists
    if (search && search.trim()) {
      url += `?search=${encodeURIComponent(search.trim())}`;
    }

    console.log("Fetching URL:", url); // Debug log

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
