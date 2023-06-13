import styled from "styled-components"

interface props {
  text: string
}

export default function Display({text}: props) {

  return(
    <DisplayContainer>
      {text}
    </DisplayContainer>
  )
}

const DisplayContainer = styled.div`
  
`;