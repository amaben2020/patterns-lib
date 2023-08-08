import { useEffect, useState } from "react";

const useOnMount = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    if (!hasMounted) setHasMounted(true);
  }, [hasMounted]);

  return hasMounted;
};

export default useOnMount;
