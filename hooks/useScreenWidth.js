import { useState, useEffect } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(1000);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
}
