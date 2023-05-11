import React, { forwardRef, useEffect, useRef } from "react";

const ThirdExample = () => {
  const ref = useRef(null);

  useEffect(() => {
    // declarative
    if (ref.current) {
      ref.current.focus();
    }
    // imperative
    window.addEventListener("focus", () => {
      const node = document.getElementById("input");
      node.style.background = "red";
    });
  }, []);
  return <Child ref={ref} />;
};

const Child = forwardRef((props, ref) => {
  return <input type="text" ref={ref} id="input" />;
});

export default ThirdExample;
