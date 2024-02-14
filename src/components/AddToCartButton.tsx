"use client";

import { useCart } from "@/hooks/useCart";
import { Button } from "./ui/button";
import { toast } from "sonner";

type AddToCartButtonProps = {
  product: Product;
};

type Product = {
  name: string;
  id: string;
  price: string;
  description: string;
  urls: string[];
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem } = useCart();
  return (
    <Button
      onClick={() => {
        addItem(product);
        toast.success("Added to cart!");
      }}
      size="lg"
      className="w-full"
      variant={"emerald"}
    >
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
