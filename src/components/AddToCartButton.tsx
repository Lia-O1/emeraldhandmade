"use client";

import { useCart, type Product } from "@/hooks/useCart";
import { Button } from "./ui/button";
import { toast } from "sonner";

const AddToCartButton = ({ product }: { product: Product }) => {
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
