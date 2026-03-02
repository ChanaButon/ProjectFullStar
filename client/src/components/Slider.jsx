import React, { useContext, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { ShopContext } from "../ShopContext";
import { useQuery } from "@tanstack/react-query";
export const PriceSlider = () => {
  const { data: allProducts = [] } = useQuery({ queryKey: ["all-products"] });
  const { priceRange, setPriceRange } = useContext(ShopContext);

  // 2. Memoize the limits so they don't change when you filter the list
  const { minLimit, maxLimit } = useMemo(() => {
    if (allProducts.length === 0) return { minLimit: 0, maxLimit: 1000 };
    const prices = allProducts.map((p) => p.price);
    return {
      minLimit: Math.floor(Math.min(...prices)),
      maxLimit: Math.ceil(Math.max(...prices)),
    };
  }, [allProducts]);

  // 3. Only set the initial range once when data first arrives
  useEffect(() => {
    if (allProducts.length > 0) {
      setPriceRange([minLimit, maxLimit]);
    }
    // We only want this to run once when rawProducts loads
  }, [allProducts.length]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box sx={{ width: 250, px: 2 }}>
      <Typography gutterBottom sx={{ fontSize: "0.8rem", color: "gray" }}>
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // Use the static limits here
        min={minLimit}
        max={maxLimit}
        sx={{
          color: "primary.main",
          "& .MuiSlider-thumb": { borderRadius: "4px" },
        }}
      />
    </Box>
  );
};
