import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  name: String,
  id: String,
  price: String,
  description: String,
  urls: [String],
});

const productSchema = new Schema({
  category: String,
  subcategory: String,
  items: [itemSchema],
});

const Product = models.Product || model("Product", productSchema);

export default Product;
