import { useEffect, useRef, useState } from "react";

type TUsePrev = [number, React.Dispatch<React.SetStateAction<number>>];
export const usePrevious = (): TUsePrev => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;

    return () => {
      prevCountRef.current = 0;
    };
  }, [count]);

  return [prevCountRef.current, setCount];
};
