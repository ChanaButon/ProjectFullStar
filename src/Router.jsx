import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import { SingleProductPage } from "./pages/SingleProductPage";
import { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";

export const Router = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(0);


  useEffect(() => {
    const handleProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const mappedData = data.map((product) => {
        return { ...product, amount: 0 };
      });
      
      const prices = mappedData.map(p => p.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);

      setProducts(mappedData);
      setFilteredProducts(mappedData);
      setMinPrice(min);
      setMaxPrice(max);
      setPrice(max);
    };

    handleProducts();
  }, []);

  useEffect(() => {
    const cat = products
      ?.map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);

    if (cat && cat.length > 0) {
      cat.unshift("All Items");
      setCategories(cat);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleCatChange = (category) => {
    console.log(category);
    if (category === "All Items") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const handlePriceChange = (newPrice) => {
  setPrice(newPrice);

  setFilteredProducts(
    products.filter(p => p.price <= newPrice)
  );
};

  // Add item to cart
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);

    if (product) {
      // Check if product already exists in cart
      const existingItem = cart.find((item) => item.id === productId);

      if (existingItem) {
        // If exists, increase the amount
        setCart(
          cart.map((item) =>
            item.id === productId ? { ...item, amount: item.amount + 1 } : item
          )
        );
      } else {
        // If new, add to cart with amount 1
        setCart([...cart, { ...product, amount: 1 }]);
      }
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.amount === 1) {
        // If amount is 1, remove the item completely
        setCart(cart.filter((item) => item.id !== productId));
      } else {
        // If amount > 1, decrease the amount
        setCart(
          cart.map((item) =>
            item.id === productId ? { ...item, amount: item.amount - 1 } : item
          )
        );
      }
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      Component: App,
    },
    {
      path: "/products/:productId",
      Component: SingleProductPage,
    },
  ]);

  return (
    <ShopContext.Provider
      value={{
        products: filteredProducts,
        categories,
        handleCatChange,
        cart,
        addToCart,
        removeFromCart,
        handlePriceChange,
        minPrice,
        maxPrice,
        price,
      }}
    >
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};
