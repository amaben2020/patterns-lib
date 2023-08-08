import { useEffect, useState } from "react";

export function StateChange() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [isGreaterThan3, setIsGreaterThan3] = useState(false);

  useEffect(() => {
    if (count3 > 3 && count3 <= 6) {
      alert("Yeah it is");
      setIsGreaterThan3(true);
    }
  }, [count3]);

  return (
    <div>
      {count1} {count2} {count3}
      <br />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <button
        onClick={() => setCount3(count3 + 1)}
        style={{
          color: isGreaterThan3 ? "red" : "",
        }}
      >
        Increment count {count3}
      </button>
    </div>
  );
}
