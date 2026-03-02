// server/scripts/importFakeStore.js
import fetch from "node-fetch";
import mongoose from "mongoose";
import { Product } from "../models/productModel.js";

// כתובת MongoDB שלך
const MONGO_URL = "mongodb://127.0.0.1:27017/gocode-shop";

const importProducts = async () => {
  try {
    // מחברים למסד
    await mongoose.connect(MONGO_URL);
    console.log("✅ MongoDB connected");

    // מביאים את המוצרים מ-FakeStoreAPI
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    // שומרים את המוצרים במסד
    await Product.insertMany(products);
    console.log("✅ Products imported successfully!");

    // סוגרים את החיבור
    await mongoose.disconnect();
    console.log("✅ MongoDB disconnected");
  } catch (error) {
    console.error("❌ Error importing products:", error);
  }
};

// מריצים את הפונקציה
importProducts();