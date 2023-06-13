import { useState, useEffect } from "react"
import { createStage } from "../stage"
import { randomTetromino } from "../component/block/block"

export default function useStage(position) {
  const [stage, setStage] = useState(createStage())
  const [block, setBlock] = useState(randomTetromino())


  useEffect(()=>{

    const he = prevStage => {
      // First flush the stage
      const newStage = prevStage.map((row: number[]) =>
        row.map((cell: any) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      block.shape.forEach((row: number[] , y: number) => {
        row.forEach((val, x) => {
          if (val !== 0) {
            newStage[y + position.y][x + position.x] = [val, "clear"];
          }
        });
      });

      

      return newStage;
    };

    setStage(pre => he(pre))

  },[position])

  return [stage]
}