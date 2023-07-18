import { useState } from "react";

export default function usePlay() {

  const [position, setPosition] = useState({ x: 10 / 2 - 1, y: 0 });
  const [maxPosition, setMaxPosition] = useState({ x: 0, y: 0 })
  
  const handleKey = (e : any) => {
    if(e.code === "ArrowLeft") { // 왼쪽 화살표
      setPosition((prev) => 
        (prev.x === 0 ? prev : { ...prev, x: prev.x - 1 }
      ));
    }else if (e.code === "ArrowRight") { // 오른쪽 화살표
      setPosition((prev) => 
        (position.x + maxPosition.x >= 10 ? prev : { ...prev, x: prev.x + 1 })
      );
      /* setPosition((prev) => ({ ...prev, x: prev.x + 1 })); */
    }else if (e.code === "ArrowDown") { // 아래 화살표
      drop()
    }
  }

  const drop = () => {
    setPosition((prev) => 
      (position.y + maxPosition.y >= 20 ? prev : { ...prev, y: prev.y + 1 })
    );
  }

  const handlePosition = (block: any) => {
    setMaxPosition({y: block.shape.length, x: block.shape[1].length})
  }

  return {
    position, handleKey, drop, handlePosition
  }
}