import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
//@ts-expect-error
import { usePrevious } from "./usePrevious.ts";
const VanillaTiltComponent = () => {
  const vanillaRef = useRef(null);
  const [count, setCount] = usePrevious();
  const [hasDomMounted, setHasDomMounted] = useState(false);
  useEffect(() => {
    if (!hasDomMounted) setHasDomMounted(true);
  }, [hasDomMounted]);

  useEffect(() => {
    if (vanillaRef?.current) {
      const element = vanillaRef?.current as HTMLElement;
      VanillaTilt.init(element, {
        glare: true,
        speed: 9,
      });
      element?.addEventListener("tiltChange", () => {
        element.style.backgroundColor = "blue";
        element.style.color = "white";

        if (hasDomMounted) {
          setCount((p) => p + 1);
        }
      });
    }

    return () => {
      // Destroy instance
      if (vanillaRef?.current) {
        const element = vanillaRef?.current as HTMLDivElement | null | any;
        element.vanillaTilt.destroy();
      }
    };
  }, [setCount, hasDomMounted]);

  return (
    <div
      ref={vanillaRef}
      style={{
        width: 300,
        height: 100,
        border: "1px solid black",
        margin: "30px auto",
        cursor: "pointer",
      }}
    >
      Logo {count}
    </div>
  );
};

export default VanillaTiltComponent;
