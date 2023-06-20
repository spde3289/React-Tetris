import { useState, useEffect } from "react"
import { createStage } from "../stage"
import { randomTetromino } from "../component/block/block"

type Position = {
  [key: string]: number
}

export default function useStage(position: Position) {
  const [stage, setStage] = useState<number[][]>(createStage())
  const [block, setBlock] = useState(randomTetromino())
  console.log(stage)
  useEffect(()=>{
    const heandleStage = (prevStage: number[][]): number[][] => {
      // 테트리스 판 생성
      const newStage = prevStage.map((row: number[]) =>
        row.map((cell) => (cell  ? 0 : cell))
      );

      // 블록 생성
      block.shape.forEach((row: number[] , y: number) => {
        row.forEach((val, x) => {
          if (val !== 0) {
            newStage[y + position.y][x + position.x] = val;
          }
        });
      });

      if(null){
        setBlock(randomTetromino());
      }

      return newStage;
    };

    setStage((pre:any) => heandleStage(pre))

  },[position])

  return [stage]
}