import express from "express";
import { ENV } from "./config/env.js";

import favoritesRouter from "./routers/favorites.route.js";
import recipesRoute from "./routers/recipes.route.js";
import categoryRoute from "./routers/category.route.js";
import path from "path";
const app = express();
const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.use(express.json());
const __dirname = path.resolve();
// app.get("/api/health", (req, res) => {
//   res.status(200).json({ success: true });
// });

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/favorites", favoritesRouter);

app.use("/api/recipes", recipesRoute);

app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
