import { Product } from "../models/productModel.js";


export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id) => {
  return await Product.findById(id);
};

export const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

export const updateProductById = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

export const deleteProductById = async (id) => {
  return await Product.findByIdAndDelete(id);
};
