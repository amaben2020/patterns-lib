import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useProducts = (url) => {
  const [products, setProducts] = useState([]);

  const handleProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(url || "");
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    handleProducts();
  }, [handleProducts]);

  return {
    products: products,
  };
};

export default useProducts;
