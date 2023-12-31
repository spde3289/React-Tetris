import { useState, useEffect } from "react";
import { createStage } from "../createStage";
import { randomTetromino, BlockType } from "../component/block/block";
import { checkBlock } from "../helper";

type Position = {
  [key: string]: number;
};

export default function useStage(position: Position) {
  const [stage, setStage] = useState<[number, string][][]>(createStage());
  const [block, setBlock] = useState<BlockType>(randomTetromino());
  console.log(checkBlock(stage, block, position))
  useEffect(() => {
    const heandleStage = (prevStage: [number, string][][]): [number, string][][] => {
      // 테트리스 판 생성
      const newStage = prevStage.map((row: any[]) =>
        row.map((cell) => (cell ? [0, "0 0 0"] : cell))
      );
      // 블록 생성
      block.shape.forEach((row: (number | BlockType)[] , y: number) => {
        row.forEach((val, x) => {
          if(val !== 0) {
            newStage[y + position.y][x + position.x] = [val, `${val ? block.color : "0 0 0"}`];
          }
        });
      });
      
 /*      newStage.forEach((row, y) => {
        row.forEach((val, x) => {
          if (val[0] !== 0) {
            newStage[y + position.y][x + position.x] = [
              val,
              `${val ? block.color : "0 0 0"}`
            ];
          }
        });
      }); */

      return newStage;
    };


    setStage((pre) => heandleStage(pre))
    
  }, [position, block])
  

  const heandleBlock = (e: KeyboardEvent) => {
    const arr: number[][] = [];
    if (e.code === "ArrowUp") {
      if ((position.x + block.shape.length) <= 10) {
        for(let i = 0; block.shape[0].length > i; i++) {
          const arr1: number[] = []; 
          for(var j = 0; block.shape.length > j; j++) {
            arr1.push(block.shape[j][i] === 1 ? 1 : 0);
          };
          arr.unshift(arr1);
        };
        setBlock((pre)=> ({...pre, shape: arr}));
      } else {
        console.log('asd')
      }
    }
    if (e.code === "Space") {
      setBlock(randomTetromino())
    }
  };

  return {stage, block, heandleBlock};
};



