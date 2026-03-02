import * as productService from "../services/productService.js";

/* GET ALL */
export const getAllProductsController = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET BY ID */
export const findProductByidController = async (req, res) => {
  try {
    const product = await productService.getProductByid(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid id" });
  }
};

/* POST */
export const createProductController = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* PUT */
export const updateProductController = async (req, res) => {
  try {
    const updated = await productService.updateProductByid(
      req.params.id,
      req.body
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* DELETE */
export const deleteProductController = async (req, res) => {
  try {
    const deleted = await productService.deleteProductByid(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};