import styled from "styled-components"
import Cell from "./block/Cell";
import useStage from "../hooks/useStage";
import usePlay from "../hooks/usePlay";


export default function Game() {
  const { position } = usePlay();
  const [stage] = useStage(position)



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
