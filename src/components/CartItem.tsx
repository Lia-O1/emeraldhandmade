import { useCart, type Product } from "@/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";

const CartItem = ({ product }: { product: Product }) => {
  const imageUrl = product.urls[0];

  const { removeItem } = useCart();

  return (
    <div className="space-y-3 py-2 px-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="absolute object-cover"
              sizes="5vw"
            />
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.name}
            </span>

            <div className="relative mt-4 text-sm text-muted-foreground">
              <button
                onClick={() => removeItem(product.id)}
                className="flex items-center gap-0.5"
              >
                <X className="pt-[1px] w-3 h-4" />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
