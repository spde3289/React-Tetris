import styled from "styled-components"

export default function Cell({type}:{type:string}) {
  return(
    <Pixle type={type} />
  )
}

const Pixle = styled.div<{ type: string }>`
  width: 25px;
  height: 25px;
  /* border: 1px solid black; */
  background-color: ${({type}) => type && "#fff"};
`