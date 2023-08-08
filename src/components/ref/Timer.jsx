import React, { useEffect, useRef, useState } from "react";
//

const Timer = () => {
  const timerRef = useRef(0);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => setCount((p) => p + 1), 200);
  };
  const pauseTimer = () => {
    timerRef.current = setInterval(() => {
      setCount(count);
    });
  };

  const resetTimer = () => {
    timerRef.current = setInterval(() => {
      setCount(0);
    });
  };

  useEffect(() => {
    return clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <div> Timer ⏱️ {timerRef.current}</div>
      <div contentEditable> Timer ⏱️ {count}</div>
      <input spellCheck="true" />
      <input type="color" />
      <button onClick={startTimer}>Start ✅</button>
      <button onClick={pauseTimer}>Pause </button>
      <button onClick={resetTimer}>Reset </button>
    </div>
  );
};

export default Timer;
