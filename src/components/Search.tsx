"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChangeEvent, useState } from "react";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hideSuggestions, setHideSuggestions] = useState(true);

  const handleFocus = () => {
    setHideSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setHideSuggestions(true);
    }, 200);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex">
      <div className="flex items-center text-sm gap-2">
        <input
          onFocus={handleFocus}
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
    </div>
  );
};

export default Search;
