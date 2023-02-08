import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3004/products';
const Celcuius = ({ data }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(URL);
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productCategory = products
    ?.map((product) => {
      return product.category;
    })
    .filter(Boolean);
  console.log(productCategory);

  const productAttributes = products
    ?.map((product) => {
      return product.attributes;
    })
    .filter(Boolean);
  console.log(productAttributes);

  const filterProductsByCategory = () => {};

  return <div>Celcuius = {Number(data * 60)}</div>;
};

export default Celcuius;
