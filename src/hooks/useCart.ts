import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ItemProps } from "@/types/types";

export type CartItem = {
  product: ItemProps;
};

type CartState = {
  items: CartItem[];
  addItem: (product: ItemProps) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] };
        }),
      removeItem: (id) =>
        set((state) => {
          const index = state.items.findIndex(
            (item) => item.product.id === id
          ); /*to find the index of the first element in an array that satisfies a provided testing function*/
          if (index !== -1) {
            const newItems = [...state.items];
            newItems.splice(index, 1);
            return { items: newItems };
          }
          return state;
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
