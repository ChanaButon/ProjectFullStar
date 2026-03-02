// server/app.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

/* -------- API ROUTES -------- */
app.use("/users", userRoutes);
app.use("/products", productRoutes);

/* -------- React Build -------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, "../client/dist");

// קבצים סטטיים
app.use(express.static(clientPath));

// SPA fallback – כל route שלא שייך ל-API
app.use((req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

export default app;