import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
const VanillaTiltComponent = () => {
  const vanillaRef = useRef(null);

  useEffect(() => {
    if (vanillaRef?.current) {
      const element = vanillaRef?.current;
      VanillaTilt.init(element);
      element?.addEventListener("tiltChange", () => {
        element.style.backgroundColor = "blue";
        element.style.color = "white";
        element.setAttribute("data-tilt-glare", "data-tilt-glare");
        element.setAttribute("data-tilt-max-glare", 0.8);
      });
    }

    return () => {
      // Destroy instance
      if (vanillaRef?.current) {
        vanillaRef?.current.vanillaTilt.destroy();
      }
    };
  }, []);
  return (
    <div
      ref={vanillaRef}
      style={{
        width: 200,
        height: 100,
        border: "1px solid black",
        margin: "30px auto",
        cursor: "pointer",
      }}
    >
      Logo
    </div>
  );
};

export default VanillaTiltComponent;
