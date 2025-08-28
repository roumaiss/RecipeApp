import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipies, updateRecipe } from "../controllers/recipes.controller.js";

const recipesRoute = Router();

recipesRoute.get("/", getRecipies);
recipesRoute.post("/add", addRecipe);
recipesRoute.put("/update/:id", updateRecipe);
recipesRoute.delete("/delete/:id", deleteRecipe);
export default recipesRoute;
