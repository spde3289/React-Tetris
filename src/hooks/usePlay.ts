import { useState, useEffect } from "react";

export default function usePlay() {

  const [position, setPosition] = useState({ x: 10 / 2 - 1, y: 0 });
  const [maxPosition, setMaxPosition] = useState({ x: 0, y: 0 })
  
  const handleKey = (e : any) => {
    if(e.code === "ArrowLeft") { // 왼쪽 화살표
      setPosition((prev) => (prev.x === 0 ? prev : { ...prev, x: prev.x - 1 }));
    }else if (e.code === "ArrowRight") { // 오른쪽 화살표
      aa()
      setPosition((prev) => (position.x + maxPosition.x >= 10 ? prev  : { ...prev,  x: prev.x + 1 }));
      /* setPosition((prev) => ({ ...prev, x: prev.x + 1 })); */
    }else if (e.code === "ArrowDown") { // 아래 화살표
      setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
    }
  }
  const drop = (stage, block): boolean => {
    
    return false;
  }

  const aa = () => {
    console.log(maxPosition.x)
  }
  console.log(maxPosition.x)

  const handlePosition = (block) => {
    
    for(let y = 0; block.shape.length > y; y++) {
      let xx = 0
      for(let x = 0; block.shape[y].length > x; x++) {
        
        if(block.shape[y][x] === 1){
          
          xx += 1
        }
        setMaxPosition((pre) => ({...pre, x: xx}))
        //console.log(xx)

        

      }
    }
  }

  return {
    position, handleKey, drop, handlePosition
  }
}