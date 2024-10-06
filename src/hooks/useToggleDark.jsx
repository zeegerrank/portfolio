import { useEffect, useState } from "react";

function useToggleDark(initialState = false) {
  const [dark, setDark] = useState(initialState);

  const toggle = () => {
    setDark((dark) => !dark);
  };

  useEffect(() => {
    if (dark === true) {
      document.documentElement?.classList.add("dark");
    } else {
      document.documentElement?.classList.remove("dark");
    }
  }, [dark]);

  return { dark, toggle };
}

export default useToggleDark;
