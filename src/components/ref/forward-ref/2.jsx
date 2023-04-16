import React, { forwardRef, useEffect, useRef } from "react";

const ForwardRef2 = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
      console.log("Input ref", ref.current);
    }
  }, []);
  return (
    <div>
      <ChildComponent ref={ref} />
    </div>
  );
};

export default ForwardRef2;

const ChildComponent = forwardRef((props, ref) => {
  return <input ref={ref} type="text" placeholder="Focus me" />;
});
