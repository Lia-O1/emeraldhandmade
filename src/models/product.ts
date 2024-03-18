import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  id: String,
  price: String,
  description: String,
  urls: [String],
});

const productSchema = new mongoose.Schema({
  category: String,
  subcategory: String,
  items: [itemSchema],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
