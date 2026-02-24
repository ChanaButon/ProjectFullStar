import { createBrowserRouter, RouterProv_ider } from "react-router";
import App from "./App";
import { SingleProductPage } from "./pages/SingleProductPage";
import { useState } from "react";
import { ShopContext } from "./ShopContext";
import { useQuery } from "@tanstack/react-query";
import TanstackProv_ider from "./QueryClientProv_ider";
import { handleProducts } from "./api/products-functions";
import { useProducts } from "./hooks/useProducts";
import { AdminPage } from "./pages/AdminPage";

export const Router = () => {
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All Items");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortMethod, setSortMethod] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { data: allProducts = [] } = useQuery({
    queryKey: ["all-products"],
    queryFn: handleProducts,
  });

  const categories = [
    "All Items",
    ...new Set(allProducts.map((p) => p.category)),
  ];

  const addToCart = (product_id) => {
    const product = allProducts.find((p) => p.__id === product_id);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((item) => item._id === product_id);
      if (existing) {
        return prev.map((item) =>
          item.__id === product_id ? { ...item, amount: item.amount + 1 } : item,
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  const removeFromCart = (product_id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.__id === product_id ? { ...item, amount: item.amount - 1 } : item,
        )
        .filter((item) => item.amount > 0),
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
    },
    {
      path: "/products/:product_id",
      Component: SingleProductPage,
    },
    {
    path: "/admin",
    Component: AdminPage,
    },


  ]);

  return (
    <ShopContext.Prov_ider
      value={{
        categories,
        categoryFilter,
        setCategoryFilter,
        cart,
        addToCart,
        removeFromCart,
        priceRange,
        setPriceRange,
        sortMethod,
        setSortMethod,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      <RouterProv_ider router={router} />
    </ShopContext.Prov_ider>
  );
};
