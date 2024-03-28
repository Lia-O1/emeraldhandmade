"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { products } from "@/config/products";
import Search from "@/components/Search";
import Checkbox from "@/components/Checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchPageProps {
  params: {
    searchInput: string;
  };
}

const SearchPage = ({ params }: SearchPageProps) => {
  const { searchInput } = params;

  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [subcategoryFilter, setSubcategoryFilter] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<
    "none" | "price-asc" | "price-desc"
  >("none");

  const allItems = products.flatMap((product) =>
    product.items.map((item) => ({
      ...item,
      category: product.category,
      subcategory: product.subcategory,
    }))
  );

  const filteredItemsNoPrice = allItems.filter((item) => {
    const matchesSearchInput =
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.toLowerCase());

    const matchesCategoryFilter =
      categoryFilter.length === 0 || categoryFilter.includes(item.category);

    const matchesSubcategoryFilter =
      subcategoryFilter.length === 0 ||
      subcategoryFilter.includes(item.subcategory);

    return (
      matchesSearchInput && matchesCategoryFilter && matchesSubcategoryFilter
    );
  });

  const filteredItems = [...filteredItemsNoPrice].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return Number(a.price) - Number(b.price);
      case "price-desc":
        return Number(b.price) - Number(a.price);
      default:
        return 0;
    }
  });

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const uniqueCategoriesMapping: Record<string, string> = {
    "home-living": "Home & Living",
    "health-beauty": "Health & Beauty",
    "jewelry-accessories": "Jewelry & Accessories",
  };

  const uniqueSubcategories = [
    ...new Set(products.map((product) => product.subcategory)),
  ];
  const uniqueSubcategoriesMapping: Record<string, string> = {
    bestsellers: "Bestsellers",
    newarrivals: "New arrivals",
    editorpics: "Editor pics",
  };

  function handleCheckboxChange(
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    value: string,
    checked: boolean
  ) {
    setState((prevState) => {
      if (checked) {
        return [...prevState, value];
      } else {
        return prevState.filter((item) => item !== value);
      }
    });
  }

  return (
    <MaxWidthWrapper>
      <section className="pt-12 mx-1">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Search Results
        </h1>
        <div className="pt-8">
          <Search />
        </div>
        <div className="w-1/2 md:w-1/4 pt-4">
          <div className="font-medium text-md text-gray-700 py-2">Price:</div>
          <Select
            onValueChange={(value) =>
              setSortOrder(value as "none" | "price-asc" | "price-desc")
            }
            defaultValue={sortOrder}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="price-asc">Low to High</SelectItem>
              <SelectItem value="price-desc">High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/4 pt-4">
            <div className="font-medium text-md text-gray-700 py-2">
              Categories:
            </div>
            {uniqueCategories.map((c) => (
              <div className="flex items-center space-x-2 py-2" key={c}>
                <Checkbox
                  id={c}
                  checked={categoryFilter.includes(c)}
                  onChange={(checked) =>
                    handleCheckboxChange(setCategoryFilter, c, checked)
                  }
                />
                <label
                  htmlFor={c}
                  className="font-medium text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {uniqueCategoriesMapping[c]}
                </label>
              </div>
            ))}
          </div>

          <div className="w-1/2 md:w-1/4 pt-4">
            <div className="font-medium text-md text-gray-700 py-2">
              Subcategories:
            </div>
            {uniqueSubcategories.map((s) => (
              <div className="flex items-center space-x-2 py-2" key={s}>
                <Checkbox
                  id={s}
                  checked={subcategoryFilter.includes(s)}
                  onChange={(checked) =>
                    handleCheckboxChange(setSubcategoryFilter, s, checked)
                  }
                />
                <label
                  htmlFor={s}
                  className="font-medium text-sm text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {uniqueSubcategoriesMapping[s]}
                </label>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProductReel items={filteredItems} />
    </MaxWidthWrapper>
  );
};

export default SearchPage;
