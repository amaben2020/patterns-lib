import React, { useEffect, useRef, useState } from "react";

import { data } from "./data/data";
import useOnMount from "./useOnMount";

const OnMount = () => {
  const isMounted = useOnMount();
  const mountRef = useRef(null);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    if (mountRef.current) {
      setTimeout(() => {
        mountRef.current.focus();
      }, 300);
    }
  }, []);

  const handleSelect = (d) => {
    console.log(d);

    // setSelected({ ...data });
  };

  console.log("selected", selected);
  return (
    <div
      style={{
        margin: "0 auto",
      }}
    >
      {isMounted ? "Has" : "On"}Mount
      <input type="text" ref={mountRef} />
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          margin: "20px 50px",
        }}
      >
        {data.map((data) => {
          return (
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(data)}
              onKeyDown={() => handleSelect(data)}
              style={{
                border: "1px solid black",
                padding: 20,
                fontSize: 20,
                maxWidth: 450,
                cursor: "pointer",
              }}
            >
              <h3> {data.title} </h3>

              <img
                loading="lazy"
                style={{
                  maxWidth: 400,
                  padding: 20,
                }}
                src={data.image.image}
                alt={data.description}
                srcset=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnMount;
