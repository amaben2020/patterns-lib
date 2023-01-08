import React from 'react';

const withProduct = (Component, url) => {
  return (props) => {
    return <Component />;
  };
};

export default withProduct;

//https://fakestoreapi.com/products
