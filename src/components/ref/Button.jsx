import React, { useRef, useState } from "react";

export default function Buttons() {
  const [count, setCount] = useState(0);
  const countRef = useRef(100);

  console.log("The Component is Re-Rendered");

  const incrementCount = () => {
    setCount(count + 1);
    console.log("count:", count);
  };
  const decrementCount = () => {
    countRef.current--;
    console.log("countRef:", countRef.current);
  };

  return (
    <div>
      <button onClick={incrementCount}>useState - {count}</button>
      <button onClick={decrementCount}>useRef - {countRef.current}</button>
    </div>
  );
}

// usage: for mutable values, and accessing dom nodes
