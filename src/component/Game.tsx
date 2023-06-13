import { useEffect, useState } from "react"
import styled from "styled-components"
import Cell from "./block/Cell";
import useStage from "../hooks/useStage";

export default function Game() {
  const [position, setPosition] = useState({ x: 4, y: 0 });
  const [stage] = useStage(position)

  useEffect(()=>{
    window.addEventListener("keydown", handleKey)
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  },[])

  const handleKey = (e : React.KeyboardEvent<Element>) => {
    if (e.keyCode === 37) { // 왼쪽 화살표
      setPosition((prev) => ({ ...prev, x: prev.x - 1 }));
    } else if (e.keyCode === 39) { // 오른쪽 화살표
      setPosition((prev) => ({ ...prev, x: prev.x + 1 }));
    } else if (e.keyCode === 40) { // 아래 화살표
      setPosition((prev) => ({ ...prev, y: prev.y + 1 }));
    }
  }

  return(
    <>
    <Container>
      <Padding>
        {stage.map(line => line.map((row, idx) => <Cell type={row[0]} key={idx} /> ) )}
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
