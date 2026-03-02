import express from "express";
import {
  getAllProductsController,
  findProductByidController,
  createProductController,
  updateProductController,
  deleteProductController
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProductsController);
router.get("/:id", findProductByidController);
router.post("/", createProductController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);

export default router;
