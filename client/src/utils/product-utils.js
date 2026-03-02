// utils/productUtils.js

/**
 * Transforms raw product data based on filtering and sorting criteria.
 */
export const transformProducts = (
  allData,
  { category, priceRange, sortMethod },
) => {
  if (!allData) return [];

  // 1. Filter by Category and Price
  const filtered = allData.filter((p) => {
    const matchesCategory = category === "All Items" || p.category === category;
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // 2. Sort the filtered results
  // We spread into a new array [...] to avoid mutating the original cached data
  return [...filtered].sort((a, b) => {
    switch (sortMethod) {
      case "זול ליקר":
        return a.price - b.price;
      case "יקר לזול":
        return b.price - a.price;
      case "א-ת":
        return a.title.localeCompare(b.title);
      case "ת-א":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
};
