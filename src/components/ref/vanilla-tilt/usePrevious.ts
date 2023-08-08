import { useEffect, useRef, useState } from "react";

type TUsePrev = [number, React.Dispatch<React.SetStateAction<number>>];
export const usePrevious = (): TUsePrev => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return [prevCountRef.current, setCount];
};
