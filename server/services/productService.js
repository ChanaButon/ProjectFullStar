import { Product } from "../models/productModel.js";


export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductBy_id = async (_id) => {
  return await Product.findBy_id(_id);
};

export const createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

export const updateProductBy_id = async (_id, data) => {
  return await Product.findBy_idAndUpdate(_id, data, { new: true });
};

export const deleteProductBy_id = async (_id) => {
  return await Product.findBy_idAndDelete(_id);
};
