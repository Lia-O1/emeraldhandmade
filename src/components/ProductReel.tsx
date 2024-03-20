import Link from "next/link";
import ProductList from "./ProductList";
import { ItemProps } from "@/types/types";

interface ProductReelProps {
  title?: string;
  href?: string;
  items: ItemProps[];
}

const ProductReel = (props: ProductReelProps) => {
  const { title, href, items } = props;

  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between text-center mb-4">
        <div className="max-w-2xl lg:max-w-4xl ">
          {title ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          ) : null}
        </div>

        {href ? (
          <Link
            href={href}
            className="text-sm font-medium text-emerald-700 hover:text-emerald-600 md:block"
          >
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-10 lg:gap-x-8">
            {items.map((item) => (
              <ProductList key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
