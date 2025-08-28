import { Router } from "express";
import {
  addToCategory,
  deleteCategory,
  getCategories,
} from "../controllers/category.controller.js";

const categoryRoute = Router();

categoryRoute.post("/add", addToCategory);

categoryRoute.get("/", getCategories);

categoryRoute.delete("/:categoryId", deleteCategory);

export default categoryRoute;
