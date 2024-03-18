import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectToDB } from "../src/lib/database";
import { products } from "../src/config/products";
import Product from "../src/models/product";

dotenv.config();

const saveProducts = async () => {
  try {
    await connectToDB();
    for (const product of products) {
      const newProduct = new Product(product);
      await newProduct.save();
    }
    console.log("Products saved successfully!");
  } catch (err) {
    console.error("An error occurred:", err);
  } finally {
    mongoose.connection.close();
  }
};

saveProducts();
