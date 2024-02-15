import { Button, buttonVariants } from "@/components/ui/button";
import { CheckCircle, Gift, Heart } from "lucide-react";
import Link from "next/link";
import { products } from "@/config/products";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";

const perks = [
  {
    name: "Handcrafted Quality",
    Icon: CheckCircle,
    description:
      "Every item on EmeraldHandmade is handcrafted with care and attention to detail. Our sellers are passionate artisans committed to quality.",
  },
  {
    name: "Unique and Personal",
    Icon: Gift,
    description:
      "Find truly unique items that you won’t find anywhere else. Personalize your home and life with items that tell a story.",
  },
  {
    name: "Support Small Businesses",
    Icon: Heart,
    description:
      "By shopping on EmeraldHandmade, you’re supporting small businesses and independent artisans. Feel good about where your money goes!",
  },
];

export default function Home() {
  const filteredProducts = products.filter(
    (p) => p.category === "home-living" && p.subcategory === "bestsellers"
  );
  const items = filteredProducts.map((product) => product.items).flat();

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your go-to destination for{" "}
            <span className="text-emerald-800">
              unique, handcrafted treasures
            </span>
            .
          </h1>
          <p className="mt-6 text-large max-w-prose text-muted-foreground">
            Welcome to EmeraldHandmade
          </p>
          <div className="mt-6">
            <Link
              href="/products?subcategory=bestsellers"
              className={buttonVariants({
                variant: "emerald",
                size: "default",
              })}
            >
              Browse Trending
            </Link>
          </div>
        </div>
        <ProductReel
          href="/products?category=home-living&subcategory=bestsellers"
          title="Recommended For You"
          items={items}
        />
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
