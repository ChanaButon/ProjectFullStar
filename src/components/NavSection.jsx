import { useContext } from "react";
import { PriceSl_ider } from "./Sl_ider";
import { SortSection } from "./SortSection";
import { ShopContext } from "../ShopContext";
import { CartDrawer } from "./CartDrawer";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export const NavSection = () => {
  const { setIsCartOpen, cart } = useContext(ShopContext);
  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <SortSection />
        <PriceSl_ider />

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
