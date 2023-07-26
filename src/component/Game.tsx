import { useEffect } from "react";
import styled from "styled-components";
import Cell from "./block/Cell";
import useStage from "../hooks/useStage";
import usePlay from "../hooks/usePlay";
import { useInterval } from "../hooks/useInterval";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../createStage";

export default function Game() {
  const { position, handleKey, drop, handlePosition } = usePlay();
  const { stage, block, heandleBlock } = useStage(position);

  useEffect(()=>{
    window.addEventListener("keyup", handleKey);
    window.addEventListener("keyup", heandleBlock);
    return () => {
      window.removeEventListener('keyup', handleKey);
      window.removeEventListener('keyup', heandleBlock);
    };
  },[position, block]);

  useEffect(()=>{
    handlePosition(block);
  },[block]);

  useInterval(() => {
    //drop();
  }, 1000);
  
  return(
    <>
      <Container>
        <Padding>
          {stage.map((line) => line.map((row, idx) => <Cell type={row} key={idx} />))}
        </Padding>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 20px;
  border: 1px solid #b6a7a7;
  background-color: #2e2c2c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Padding = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 1fr);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 1fr);
  grid-gap: 1px;
  border: 1px solid #fff;
`;
