import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5 },
  price: { type: Number, required: true, min: 0 },
  description: String,
  category: String,
  image: String,
  rating: {
    rate: { type: Number, min: 0, max: 5 },
    count: Number
  }
});

export const Product = mongoose.model("Product", productSchema);
