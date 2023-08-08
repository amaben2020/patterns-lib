import { useEffect, useRef, useState } from "react";

type TUsePrev = [number];
export const usePrevious = (count): TUsePrev => {

  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;

    return () => {
      prevCountRef.current = 0;
    };
  }, [count]);

  return [prevCountRef.current];
};
