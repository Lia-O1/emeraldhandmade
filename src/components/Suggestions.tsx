import { ItemProps } from "@/types/types";
import Link from "next/link";

interface SuggestionsProps {
  suggestions: ItemProps[];
}

const Suggestions = ({ suggestions }: SuggestionsProps) => {
  return (
    <div className="flex">
      <div className="absolute inset-x-0 top-full font-medium text-sm  rounded-md">
        <div
          className="absolute inset-0 top-1/2 bg-white shadow"
          aria-hidden="true"
        />
        <div className="relative bg-white divide-y divide-gray-200">
          {suggestions.length > 0 ? (
            suggestions.map((s, i) => {
              return (
                <div
                  key={i}
                  className="p-2 py-3 hover:bg-gray-100 text-secondary-foreground font-medium"
                >
                  <Link href={`/product/${s.id}`}>{s.name}</Link>
                </div>
              );
            })
          ) : (
            <div className="p-2 py-3">No items found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
