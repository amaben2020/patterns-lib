import { useEffect, useState } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", (e) => {
        let mql = window.matchMedia(query).matches;
        const width = e.target.outerWidth < 600;
        setMatches(mql ?? width);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {
        setMatches((p) => !p);
      });
    };
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
