"use client";

import { Button } from "./ui/button";
import { toast } from "sonner";

const AddToCartButton = () => {
  return (
    <Button
      onClick={() => {
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
