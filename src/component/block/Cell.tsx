import styled from "styled-components"

interface cellProps {
  type: (number | string)[]
}

export default function Cell({type}: cellProps) {

  return(
    <Pixle type={type} />
  )
}

const Pixle = styled.div<{ type: cellProps}>`
  width: 25px;
  height: 25px;
  /* border: 1px solid black; */
  background-color: rgb(${({type}) => type[1]});
`