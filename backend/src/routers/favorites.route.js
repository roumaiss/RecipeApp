import { Router } from "express";
import { favoritesTable } from "../db/schema.js";
import { addTofavorites, deleteFavorite, getUserFavorites } from "../controllers/favorites.controller.js";

const favoritesRouter = Router();

favoritesRouter.post("/", addTofavorites);

favoritesRouter.get("/:userId", getUserFavorites);

favoritesRouter.delete("/:userId/:recipeId", deleteFavorite);

export default favoritesRouter;
