import styled from "styled-components";
import Game from "./component/Game";
import ScoreBar from "./component/SideBar/ScoreBar";

function App() {
  
  return (
    <>
      <Container>
        <Game />
        <ScoreBar />
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
`

export default App
