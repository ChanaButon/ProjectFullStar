import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { ShopContext } from "../ShopContext";

export const PriceSlider = () => {
  const { minPrice, maxPrice, price, handlePriceChange } =
    useContext(ShopContext);

  return (
    <Box sx={{ width: 250, mt: 2 }}>
      <Typography gutterBottom>
        Max Price: ${price}
      </Typography>

      <Slider
        value={price}
        min={minPrice}
        max={maxPrice}
        onChange={(e, newValue) => handlePriceChange(newValue)}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
