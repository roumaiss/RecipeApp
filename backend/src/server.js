import express from "express";
import { ENV } from "./config/env.js";
import { db } from "./config/db.js";
import { favoritesTable } from "./db/schema.js";
import { and, eq } from "drizzle-orm";
import favoritesRouter from "./routers/favorites.route.js";
import recipesRoute from "./routers/recipes.route.js";
import categoryRoute from "./routers/category.route.js";

const app = express();
const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.use(express.json());

// app.get("/api/health", (req, res) => {
//   res.status(200).json({ success: true });
// });
app.use("/api/favorites" , favoritesRouter)

app.use("/api/recipes" , recipesRoute)

app.use("/api/categories", categoryRoute);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
