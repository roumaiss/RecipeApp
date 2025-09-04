import { db } from "../config/db.js";
import { categoryTable } from "../db/schema.js";

export const addToCategory = async (req, res) => {
  try {
    const { image, name } = req.body;

    if (!image || !name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newCategory = await db
      .insert(categoryTable)
      .values({
        image,
        name,
      })
      .returning();
    console.log(newCategory[0]);
    res.status(201).json(newCategory[0]);
  } catch (error) {
    console.log("Error adding to category", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await db.select().from(categoryTable);
    res.status(200).json(categories);
  } catch (error) {
    console.log("Error fetching categories", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    await db
      .delete(categoryTable)
      .where(eq(categoryTable.id, parseInt(categoryId)));

    res.status(200).json({ message: "Category removed successfully" });
  } catch (error) {
    console.log("Error removing a category", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
