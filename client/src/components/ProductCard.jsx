import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export const ProductCard = (props) => {
  const { cart, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const cartItem = cart.find((item) => item._id === props._id);
  const amount = cartItem ? cartItem.amount : 0;

  const handleNavigateToProductPage = () => {
    navigate(`/products/${props._id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image" onClick={handleNavigateToProductPage}>
        <img src={props.img} alt={props.itemName} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        <IconButton onClick={() => removeFromCart(props._id)} color="primary" disabled={amount === 0}>
          <RemoveCircleIcon />
        </IconButton>
        <span>{amount}</span>
        <IconButton onClick={() => addToCart(props._id)} color="primary">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <div className="product-info">
        <h5>{props.itemName}</h5>
        <h6>${props.price}</h6>
      </div>
    </div>
  );
};