import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import AddToCartButton from "@/components/AddToCartButton";
import ImageSlider from "@/components/ImageSlider";
import ProductReel from "@/components/ProductReel";
import { products } from "@/config/products";
import { formatPrice } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    productId: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const { productId } = params;

  const allProducts = products.flatMap((p) =>
    p.items.map((item) => ({
      ...item,
      category: p.category,
      subcategory: p.subcategory,
    }))
  );
  const product = allProducts.find((p) => p.id === productId);

  if (!product) return notFound();

  let filteredProducts = products.filter(
    (p) =>
      p.category === product.category && p.subcategory === product.subcategory
  );

  let items = filteredProducts
    .map((product) => product.items)
    .flat()
    .filter((item) => item.id !== productId);

  let reelSubcategory = product.subcategory;

  if (items.length === 0) {
    const subcategories = ["bestsellers", "newarrivals", "editorpics"];
    const similarSubcategories = subcategories.filter(
      (s) => s !== product.subcategory
    );
    reelSubcategory = similarSubcategories[1];
    filteredProducts = products.filter(
      (p) =>
        p.category === product.category && p.subcategory === reelSubcategory
    );

    items = filteredProducts.map((product) => product.items).flat();
  }

  const titleMapping: Record<string, string> = {
    bestsellers: "Bestsellers",
    newarrivals: "New arrivals",
    editorpics: "Editor pics",
  };

  const title = titleMapping[product.subcategory];

  const BREADCRUMBS = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: title,
      href: `/products?category=${product.category}&subcategory=${product.subcategory}`,
    },
  ];

  return (
    <MaxWidthWrapper className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          {/* Product Details */}
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={breadcrumb.href}
                      className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section className="mt-4">
              <div className="mt-4 space-y-6">
                <p className="text-base text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex items-center">
                <Check
                  aria-hidden="true"
                  className="h-5 w-5 flex-shrink-0 text-green-500"
                />
                <p className="ml-2 text-sm text-muted-foreground">In stock</p>
              </div>
              <div className="flex items-center mt-6">
                <p className="font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>
              </div>
            </section>
          </div>

          {/* Product images */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-square rounded-lg w-">
              <ImageSlider urls={product.urls} />
            </div>
          </div>

          {/* add to cart part */}
          <div className="mt-10 w-full lg:w-2/5">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6">
        <ProductReel
          href={`/products?category=${product.category}&subcategory=${reelSubcategory}`}
          title="Similar products"
          items={items}
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
