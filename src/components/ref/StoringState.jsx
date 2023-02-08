import React, { useEffect, useRef, useState } from "react";

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 90, 100];

export default function StoringState() {
  const [price, setPrice] = useState(10);
  const [index, setIndex] = useState(0);
  const priceRef = useRef(0);

  const onPriceChange = (e) => {
    setPrice(Number(e.target.value));
    setIndex(e.target.options.selectedIndex);
  };

  console.log(index);

  const priceOptions = prices.map((price, index) => (
    <option key={index} value={price}>
      {price}$
    </option>
  ));

  useEffect(() => {
    priceRef.current = price;
  }, [index]);

  const icon =
    priceRef.current < price ? "😡" : priceRef.current > price ? "😀" : " 🥸 ";

  return (
    <div>
      <select value={price} onChange={onPriceChange}>
        {priceOptions}
      </select>
      <div>
        <p> Current price: {price}</p>
        <p>
          Previous price: {priceRef.current} {icon}
        </p>
      </div>
    </div>
  );
}
