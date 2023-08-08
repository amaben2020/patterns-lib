import React, { useEffect, useRef } from "react";
import useOnMount from "./useOnMount";

const OnMount = () => {
  const isMounted = useOnMount();
  const mountRef = useRef(null);
  useEffect(() => {
    if (mountRef.current) {
      setTimeout(() => {
        mountRef.current.focus();
      }, 300);
    }
  }, []);

  return (
    <div>
      {isMounted ? "Has" : "On"}Mount
      <input type="text" ref={mountRef} />
    </div>
  );
};

export default OnMount;
