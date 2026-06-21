import axios from "axios";

export const getAllRecipe = async (limit) => {
  try {
    const res = await axios.get(`https://dummyjson.com/recipes`);

    return res.data;
  } catch (err) {
    // console.error("Failed to fetch recipes:", error);
    // throw error;
  }
};
