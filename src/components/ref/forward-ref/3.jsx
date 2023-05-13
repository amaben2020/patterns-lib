import axios from "axios";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

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
  const [p, sP] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:3004/products");

      sP(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Child products={p} ref={ref} />;
};

const Child = forwardRef((props, ref) => {
  return <input type="text" ref={ref} id="input" />;
});

export default ThirdExample;
