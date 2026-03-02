import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { SingleProductPage } from "./pages/SingleProductPage";
import { AdminPage } from "./pages/AdminPage";
import { useState } from "react";
import { ShopContext } from "./ShopContext";
import { useQuery } from "@tanstack/react-query";
import { handleProducts } from "./api/products-functions";

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

  const categories = ["All Items", ...new Set(allProducts.map((p) => p.category))];

  // ====== ADD TO CART ======
  const addToCart = (productid) => {
    const product = allProducts.find((p) => p._id === productid);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((item) => item._id === productid);
      if (existing) {
        return prev.map((item) =>
          item._id === productid ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  // ====== REMOVE FROM CART ======
  const removeFromCart = (productid) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === productid ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  const router = createBrowserRouter([
    { path: "/", Component: App },
    { path: "/products/:productid", Component: SingleProductPage },
    { path: "/admin", Component: AdminPage },
  ]);

  return (
    <ShopContext.Provider
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
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};