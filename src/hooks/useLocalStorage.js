import { useEffect, useState } from "react";

const useLocalStorage = (key, item) => {
  const [value, setValue] = useState(() => {
    const JSONvalue = localStorage.getItem(String(key));

    return JSONvalue ? JSONvalue : item;
  });

  // whenever the value changes, rerun this function
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const parsed = JSON.parse(value);

  return { value, setValue };
};

export default useLocalStorage;
