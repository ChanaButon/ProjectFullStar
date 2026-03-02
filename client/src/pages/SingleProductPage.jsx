import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../api/products-functions";

export const SingleProductPage = () => {
  const { product_id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", product_id],
    queryFn: () => fetchSingleProduct(product_id),
    enabled: !!product_id,
  });

  if (isLoading) return <div>Loading product details...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div className="single-product-container">
      <Link to={"/"}>← Back to Homepage</Link>

      <div className="product-display">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "200px" }}
        />
        {Object.entries(product).map(([key, value]) => {
          if (typeof value === "object" || key === "image") return null;
          return (
            <div key={key} className="productPageDetails">
              <p>{key}:</p> <b>{String(value)}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};
