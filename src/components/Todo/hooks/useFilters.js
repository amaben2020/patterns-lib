import { useState } from "react";

const useFilters = () => {
  const stateInitializer = () => "";
  const [filters, setFilters] = useState(stateInitializer());

  const handleFilter = (string) => {
    setFilters(string);
  };

  const handleFilterProductsByShipment = (products) => {
    return products.filter((product) => {
      if (filters === "true") {
        return product.isShippable;
      } else if (filters === "false") {
        return !product.isShippable;
      }
      return products;
    });
  };

  return { handleFilterProductsByShipment, handleFilter };
};

export default useFilters;
