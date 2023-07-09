import { useState, useEffect } from "react";
import { useInterval } from "../hooks/useInterval";

export default function usePlay() {
  const [position, setPosition] = useState({ x: 4, y: 0 });

  useEffect(()=>{
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  },[])

  useInterval(() => {
    setPosition({
      x: position.x,
      y: position.y + 1
    })
  }, 1000);

  const handleKey = (e : KeyboardEvent): void => {
    if (e.code === "ArrowLeft") { // 왼쪽 화살표
      setPosition((prev) => ({ ...prev, x: prev.x === 0 ? prev.x : prev.x - 1  }));
    } else if (e.code === "ArrowRight") { // 오른쪽 화살표
      setPosition((prev) => ({ ...prev, x: prev.x === 8 ? prev.x : prev.x + 1 }));
    } else if (e.code === "ArrowDown") { // 아래 화살표
      setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
    }
  }


  return {
    position,
  }
}