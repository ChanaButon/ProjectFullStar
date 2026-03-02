import { useContext } from "react";
import { PriceSlider } from "./Slider";
import { SortSection } from "./SortSection";
import { ShopContext } from "../ShopContext";
import { CartDrawer } from "./CartDrawer";
import { Badge, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router";

export const NavSection = () => {
  const { setIsCartOpen, cart } = useContext(ShopContext);
  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <SortSection />
        <PriceSlider />
        <Button
          component={Link}
          to="/admin"
          variant="contained"
          color="secondary"
        >
          Admin
        </Button>


        {/* Cart Button */}
        <IconButton onClick={() => setIsCartOpen(true)} color="primary">
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </IconButton>
      </div>
      <CartDrawer />
    </nav>
  );
};
