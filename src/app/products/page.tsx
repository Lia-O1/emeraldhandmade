import ProductList from "@/components/ProductList";
import { products } from "@/config/products";

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

  return <ProductList items={items} />;
};

export default ProductsPage;
