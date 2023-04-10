import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const ref = useRef(null);
  const scrollRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
          setIsScrolled(true);
        }
      });
    }
  }, [isScrolled]);

  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (ref.current) return;

    ref.current = setInterval(() => setTime((time) => time + 1), 100);
  };

  const stopTimer = () => {
    clearInterval(ref.current);
  };

  useEffect(() => {
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{ border: isScrolled ? "3px solid red" : "1px solid black" }}
    >
      <button onClick={startTimer}> Start ✅</button>
      <button onClick={stopTimer}>Stop ❌</button>
      StopWatch ⏰
      <div
        style={{
          padding: 30,
        }}
      >
        Time : {time}
      </div>
    </div>
  );
};

export default StopWatch;
