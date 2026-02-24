import express from "express";
import {
  getAllProductsController,
  findProductBy_idController,
  createProductController,
  updateProductController,
  deleteProductController
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProductsController);
router.get("/:_id", findProductBy_idController);
router.post("/", createProductController);
router.put("/:_id", updateProductController);
router.delete("/:_id", deleteProductController);

export default router;
