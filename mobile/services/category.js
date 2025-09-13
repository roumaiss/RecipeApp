import axios from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get(`http://192.168.100.9:5001/api/categories`);
    return res.data;
  } catch (err) {
    console.error("API error:", err);
    throw err;
  }
};
