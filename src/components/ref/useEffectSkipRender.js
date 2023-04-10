import { useEffect, useRef, useState } from "react";

const useEffectSkipRender = () => {
  const ref = useRef(true);
  useEffect(() => {
    ref.current = false;
  }, []);

  return ref.current;
};

export default useEffectSkipRender;

export const MyComponent = () => {
  const isMount = useEffectSkipRender();
  const [state, setState] = useState(0);

  useEffect(() => {
    if (isMount) {
      console.log("First Render");
    } else {
      console.log("Subsequent Render");
    }
  });

  return isMount ? (
    <p>
      First Render {String(isMount)}{" "}
      <button onClick={() => setState(state + 1)}>+</button>
    </p>
  ) : (
    <p>Subsequent Render</p>
  );
};
