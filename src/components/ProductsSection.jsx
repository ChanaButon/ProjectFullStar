
import {ProductCard} from "./ProductCard";
import { useContext } from "react";
import { ShopContext } from "../ShopContext.js";
import { Link } from "react-router-dom";
 
 export const ProductsSection = () => {

const { products } = useContext(ShopContext);
  return (
    <section className="products">
      {products.map((product) => (
        
        <Link
      key={product.id}
      to={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProductCard
        itemName={product.title}
        price={product.price}
        img={product.image}
      />
    </Link>
  ))}
    </section>
  );
};
