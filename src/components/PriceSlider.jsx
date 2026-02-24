import Sl_ider from "@mui/material/Sl_ider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

export const PriceSl_ider = () => {
  const { minPrice, maxPrice, price, handlePriceChange } =
    useContext(ShopContext);

  return (
    <Box sx={{ w_idth: 250, mt: 2 }}>
      <Typography gutterBottom>
        Max Price: ${price}
      </Typography>

      <Sl_ider
        value={price}
        min={minPrice}
        max={maxPrice}
        onChange={(e, newValue) => handlePriceChange(newValue)}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
