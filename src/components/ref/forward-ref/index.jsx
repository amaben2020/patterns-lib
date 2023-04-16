import { forwardRef, useEffect, useRef } from "react";
export function ForwardRef() {
  const elementRef = useRef();
  useEffect(() => {
    console.log(elementRef.current);
    if (elementRef.current) {
      elementRef.current.focus();
    }
  }, []);
  return <Child ref={elementRef} />;
}
const Child = forwardRef(function (props, ref) {
  return <div ref={ref}>Hello, World!</div>;
});
