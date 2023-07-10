import { useEffect } from "react";
import styled from "styled-components"
import Cell from "./block/Cell";
import useStage from "../hooks/useStage";
import usePlay from "../hooks/usePlay";
import { useInterval } from "../hooks/useInterval";

export default function Game() {
  const { position, handleKey, drop } = usePlay();
  const {stage, block} = useStage(position);

  useEffect(()=>{
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  },[])

  useInterval(() => {
    drop(stage, block)
  }, 1000);

  return(
    <>
      <Container>
        <Padding>
          {stage.map((line) => line.map((row, idx) => <Cell type={row} key={idx} /> ))}
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
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(20, 1fr);
  grid-gap: 1px;
  border: 1px solid #fff;
`;
