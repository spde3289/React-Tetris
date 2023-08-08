import { useState, useEffect } from "react";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../createStage";

export const checkDuplicated = (
    position: any,
    tetromino: any[][],
    render: any[][]
) => {
  return tetromino
    .filter((row) => row.some((v) => v))
    .some((row, rowIndex) =>
      row.some((cell, columnIndex) => {
        const findRender =
          render?.[rowIndex + position.y]?.[columnIndex + position.x];
      if (cell && findRender) return true;
      else if (cell && findRender === undefined) return true;
    })
  );
};

export default function usePlay() {

  const [position, setPosition] = useState({ x: (STAGE_WIDTH / 2) - 1, y: 0 });
  const [maxPosition, setMaxPosition] = useState({ x: 0, y: 0 })

  useEffect(()=>{
    if(position.x + maxPosition.x > 10){
      setPosition((prev) => 
        ({ ...prev, x: 10 - maxPosition.x })
      );
    }
  },[maxPosition]);
  console.log(position.x, maxPosition.x)
  
  const handleKey = (e : any) => {
    if (e.code === "ArrowLeft") { // 왼쪽 화살표
      setPosition((prev) => 
        (prev.x === 0 ? prev : { ...prev, x: prev.x - 1 }
      ));
    } else if (e.code === "ArrowRight") { // 오른쪽 화살표
      setPosition((prev) => 
        (position.x + maxPosition.x >= STAGE_WIDTH ? prev : { ...prev, x: prev.x + 1 })
      );
    }else if (e.code === "ArrowDown") { // 아래 화살표
      drop();
    };
  };

  const drop = () => {
    setPosition((prev) => 
      (position.y + maxPosition.y >= STAGE_HEIGHT ? prev : { ...prev, y: prev.y + 1 })
    );
  };

  const handlePosition = (block: any) => {
    setMaxPosition({y: block.shape?.length, x: block.shape[0]?.length})
  };

  return {
    position, handleKey, drop, handlePosition
  };
};