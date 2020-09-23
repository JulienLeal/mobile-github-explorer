import React, { useEffect } from "react";

export function useDebounce(effect: Function, deps: React.DependencyList = []) {
  useEffect(() => {
    const debounceTimeout = setTimeout(effect, 400);

    return () => clearTimeout(debounceTimeout);
  }, deps);
}
