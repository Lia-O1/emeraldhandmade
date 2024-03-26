"use client";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { SearchIcon } from "lucide-react";
import { products } from "@/config/products";
import { ItemProps } from "@/types/types";
import Suggestions from "./Suggestions";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { useRouter } from "next/navigation";

const Search = ({ mobile }: { mobile?: string }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useDebouncedState<ItemProps[]>([], 300);
  const [hideSuggestions, setHideSuggestions] = useState(true);
  const router = useRouter();

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      router.push(`/search/${value}`);
    }
    setHideSuggestions(true);
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
    <form onSubmit={handleSubmit} className="flex relative">
      <div className="flex items-center text-sm gap-2">
        <Input
          onBlur={handleBlur}
          type="search"
          id="search"
          placeholder="Find unique crafts…"
          value={value}
          onChange={handleSearchInputChange}
        />
        <Button
          disabled={suggestions.length === 0}
          type="submit"
          size="sm"
          variant="ghost"
        >
          <SearchIcon />
        </Button>
      </div>
      {!mobile && !hideSuggestions && <Suggestions suggestions={suggestions} />}
    </form>
  );
};

export default Search;
