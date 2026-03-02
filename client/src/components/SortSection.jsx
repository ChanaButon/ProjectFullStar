import { useContext } from "react";
import { ShopContext } from "../ShopContext";
import { FilterSortComp } from "./FilterSortComp";

export const SortSection = () => {
  const { categories, setCategoryFilter, setSortMethod } =
    useContext(ShopContext);

  const sortOptions = ["זול ליקר", "יקר לזול", "א-ת", "ת-א"];

  return (
    <div className="sort">
      <FilterSortComp
        onSelect={(val) => setCategoryFilter(val)}
        label={"Filter by:"}
        listOfOptions={categories}
      />
      <FilterSortComp
        onSelect={(val) => setSortMethod(val)}
        label={"Sort by:"}
        listOfOptions={sortOptions}
      />
    </div>
  );
};
