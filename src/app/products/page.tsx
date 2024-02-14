import ProductReel from "@/components/ProductReel";
import { products } from "@/config/products";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductsPage = ({ searchParams }: PageProps) => {
  const category = searchParams.category;
  const subcategory = searchParams.subcategory;

  const filteredProducts = products.filter(
    (p) => p.category === category && p.subcategory === subcategory
  );

  const items = filteredProducts.map((product) => product.items).flat();

  const titleMapping: Record<string, string> = {
    bestsellers: "Bestsellers",
    newarrivals: "New arrivals",
    editorpics: "Editor pics",
  };

  let title = "Collection";

  if (typeof subcategory === "string") {
    title = titleMapping[subcategory] || title;
  }

  return (
    <MaxWidthWrapper>
      <ProductReel items={items} title={title} />{" "}
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
