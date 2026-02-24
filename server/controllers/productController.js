import * as productService from "../services/productService.js";

export const getAllProductsController = async (req, res) => {
  try {
    
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findProductBy_idController = async (req, res) => {
  try {
    const product = await productService.getProductBy_id(req.params._id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Inval_id _id" });
  }
};

export const createProductController = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const updated = await productService.updateProductBy_id(
      req.params._id,
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

export const deleteProductController = async (req, res) => {
  try {
    const deleted = await productService.deleteProductBy_id(req.params._id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(deleted);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
