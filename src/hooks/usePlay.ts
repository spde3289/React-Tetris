import { useState } from "react";

export default function usePlay() {

  const [position, setPosition] = useState({ x: 4, y: 0 });

  const handleKey = (e : KeyboardEvent) => {
    if(e.code === "ArrowLeft") { // 왼쪽 화살표
      setPosition((prev) => ({ ...prev, x: prev.x -1 }));
    }else if (e.code === "ArrowRight") { // 오른쪽 화살표
      setPosition((prev) => ({ ...prev, x: prev.x + 1 }));
    }else if (e.code === "ArrowDown") { // 아래 화살표
      if(true){
        setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
      };
    }
  }
/* 
  const drop = (stage, block): boolean => {
    //console.log(stage, block)
    if(stage || position){
      return true
    }
    
    return false;
  } */

  return {
    position, handleKey
  }
}