"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChangeEvent, useState } from "react";
import { SearchIcon } from "lucide-react";
import { products } from "@/config/products";
import { ItemProps } from "@/types/types";
import Suggestions from "./Suggestions";
import { useDebouncedState } from "@/hooks/useDebouncedState";

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useDebouncedState<ItemProps[]>([], 300);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 300);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value.toLowerCase();
    setValue(userInput);
    setHideSuggestions(false);

    const rankedProducts = products.flatMap((product) =>
      product.items
        .map((item) => {
          let score = 0;
          const nameIndex = item.name.toLowerCase().includes(userInput);
          const descriptionIndex = item.description
            .toLowerCase()
            .includes(userInput);

          if (nameIndex) {
            score += 10;
          }

          if (descriptionIndex) {
            score += 5;
          }

          return { ...item, score };
        })
        .filter((item) => item.score > 0)
    );

    const topProducts = rankedProducts
      .sort((a, b) => b.score - a.score)
      .slice(0, 2);
    const suggestions = topProducts.map(({ score, ...item }) => item);
    setSuggestions(suggestions);
  };

  return (
    <div className="flex relative">
      <div className="flex items-center text-sm gap-2">
        <input
          onBlur={handleBlur}
          type="search"
          className="w-100 border-solid border-2 rounded-md lg:p-1"
          placeholder="Find unique crafts…"
          value={value}
          onChange={handleSearchInputChange}
        />
        <Link
          href="/"
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <SearchIcon />
        </Link>
      </div>
      {!hideSuggestions && <Suggestions suggestions={suggestions} />}
    </div>
  );
};

export default Search;
