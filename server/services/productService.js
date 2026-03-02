import { Product } from "../models/productModel.js";

/* GET */
export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductByid = async (id) => {
  return await Product.findById(id);
};

/* POST */
export const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

/* PUT */
export const updateProductByid = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

/* DELETE */
export const deleteProductByid = async (id) => {
  return await Product.findByIdAndDelete(id);
};