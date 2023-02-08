import React, { useEffect, useRef, useState } from "react";
const functionAsProp = (render) => {
  return <div> {render()}</div>;
};

const ShowRender = () => {
  const s = "Amaben";

  const [width, setWidth] = useState(240);
  const [widthRight, setWidthRight] = useState(240);
  const [startMoving, setStartMoving] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const changeWidth = (e) => {
      console.log("evt", e);
      if (!startMoving) return;
      if (!ref.current) return;

      const left = ref.current.getBoundingClientRect().left;

      const wi = e.clientX - left;

      setWidth(wi);
      setWidthRight(e.clientX);
    };

    ref.current.addEventListener("mousemove", changeWidth);

    return () => ref.current?.removeEventListener("mousemove", changeWidth);
  }, [startMoving, ref]);

  const onStartMoving = () => {
    setStartMoving(true);
  };

  const onEndMoving = () => {
    setStartMoving(false);
  };

  return (
    <>
      {functionAsProp(() => (
        <div> {s}</div>
      ))}

      <div
        ref={ref}
        onMouseLeave={onEndMoving}
        onMouseEnter={onStartMoving}
        style={{
          width: `${width}px`,
          backgroundColor: "red",
          height: 300,
          margin: "0 auto",
        }}
      ></div>
    </>
  );
};

export default ShowRender;
