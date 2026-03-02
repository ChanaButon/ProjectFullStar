import { useQuery } from "@tanstack/react-query";
import { transformProducts } from "../utils/product-utils";
import { handleProducts } from "../api/products-functions";
import { ShopContext } from "../ShopContext";
import { useContext } from "react";

export const useProducts = () => {
  const {
    categoryFilter = "",
    priceRange,
    sortMethod,
  } = useContext(ShopContext);

  return useQuery({
    queryKey: ["all-products"],
    queryFn: handleProducts,
    select: (data) =>
      transformProducts(data, {
        category: categoryFilter,
        priceRange,
        sortMethod,
      }),
    staleTime: 1000 * 60 * 5,
  });
};
