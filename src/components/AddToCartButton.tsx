"use client";

import { useCart } from "@/hooks/useCart";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { ItemProps } from "@/types/types";

interface ProductProps extends ItemProps {
  category: string;
  subcategory: string;
}

const AddToCartButton = ({ product }: { product: ProductProps }) => {
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
