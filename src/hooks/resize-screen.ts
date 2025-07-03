"use client";
import { useEffect, useState } from "react";

interface K_Int_ResizeScreenHook {
  widthScreen: number;
}

const useResizeScreen = (): K_Int_ResizeScreenHook => {
  const [widthScreen, setWidthScreen] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    widthScreen,
  };
};

export default useResizeScreen;
