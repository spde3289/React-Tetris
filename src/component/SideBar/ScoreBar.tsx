import styled from "styled-components";
import Display from "./Display";

export default function ScoreBar() {
  return(
    <Container>
      <Display text={`score : 점수`}/>
      <Display text={`next :`}/>
    </Container>
  )
}

const Container = styled.div`
  margin-left: 30px;
  border: 1px solid #000;
`;