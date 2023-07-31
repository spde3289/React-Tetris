import styled from "styled-components"

interface cellProps {
  type: any;
  
}

export default function Cell({type}: cellProps) {
  //console.log(type)
  return(
    <Pixle type={type} />
  )
}

const Pixle = styled.div<cellProps>`
  width: 25px;
  height: 25px;
  ${({ type }) => `
    background-color: rgb(${type[1]})
  `}
  
`