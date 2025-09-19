// hooks/useRecipes.ts
import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../services/recipes";

export const useRecipes = (search) => {
  return useQuery({
    queryKey: ["recipes", search], // include search in key to cache properly
    queryFn: () => getRecipes({ search }),
    staleTime: 1000 * 60, // optional, e.g. 1 min cache
  });
};
