import { useState, useEffect, useRef } from "react";

export const useDebouncedState = <T>(initialValue: T, delay: number) => {
  const [state, setState] = useState(initialValue);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setDebouncedState = (value: T) => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      setState(value);
    }, delay);

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  };

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return [state, setDebouncedState] as const;
};
