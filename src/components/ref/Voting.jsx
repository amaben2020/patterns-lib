import React, { useEffect, useRef, useState } from "react";

export default function Voting() {
  const [count, setCount] = useState(0);
  const focusRef = useRef(null);

  useEffect(() => {
    if (count >= 10 && focusRef.current) {
      focusRef.current.focus();
    }
  }, [count]);

  const handleAddCount = () => setCount((prev) => prev + 1);

  return (
    <div>
      <form>
        <input type="text" ref={focusRef} />
      </form>
      Add count: <button onClick={handleAddCount}>Add </button>
      <p>{count}</p>
    </div>
  );
}
