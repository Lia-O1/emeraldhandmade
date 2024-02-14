import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { formatPrice } from "@/lib/utils";
import { ItemProps } from "./ProductReel";

interface ProductListProps {
  item: ItemProps;
}

const ProductList = ({ item }: ProductListProps) => {
  return (
    <div>
      <Link
        key={item.id}
        className="h-full w-full cursor-pointer group/main"
        href={`/product/${item.id}`}
      >
        <div className="flex flex-col w-full">
          <ImageSlider urls={item.urls} />
          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {item.name}
          </h3>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {formatPrice(item.price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
