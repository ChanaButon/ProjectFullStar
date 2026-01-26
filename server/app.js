import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"
const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

export default app;
