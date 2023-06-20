import styled from "styled-components"

interface cellProps {
  type: number
}

export default function Cell({type}: cellProps) {
  return(
    <Pixle type={type} />
  )
}

const Pixle = styled.div<{ type: number }>`
  width: 25px;
  height: 25px;
  /* border: 1px solid black; */
  background-color: ${({type}) => type && "#fff"};
`