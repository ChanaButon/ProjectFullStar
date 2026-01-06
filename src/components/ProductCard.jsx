import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { useNavigate } from "react-router";

export const ProductCard = (props) => {
  const { cart, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  // Find the item in cart to get its amount
  const cartItem = cart.find((item) => item.id === props.id);
  const amount = cartItem ? cartItem.amount : 0;

  const handleNavigateToProductPage = () => {
    navigate(`/products/${props.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image" onClick={handleNavigateToProductPage}>
        <img src={props.img} />
      </div>
      <button onClick={() => addToCart(props.id)}>+</button>
      <span>{amount}</span>
      <button disabled={amount === 0} onClick={() => removeFromCart(props.id)}>
        -
      </button>
      <div className="product-info">
        <h5>{props.itemName}</h5>
        <h6>${props.price}</h6>
      </div>
    </div>
  );
};
