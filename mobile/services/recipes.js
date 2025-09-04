import axios from "axios";

export const getRecipes = async () => {
  try {
    const res = await axios.get("http://10.0.2.2:5001/api/recipes");
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
