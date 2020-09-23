import React, { useEffect } from "react";

/**
 * This hook apply debounce effect
 * then 400 ms invoke the effect
 * 
 * @param effect 
 * @param deps 
 */
export function useDebounce(effect: Function, deps: React.DependencyList = []) {
  useEffect(() => {
    const debounceTimeout = setTimeout(effect, 400);

    return () => clearTimeout(debounceTimeout);
  }, deps);
}
