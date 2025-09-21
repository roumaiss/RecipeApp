import axios from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/api/categories`);
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
