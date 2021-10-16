import React from "react"
import styled from "styled-components"

const Container = styled.section`
  border-radius: 14px;
  background-color: #fff;
  height: 30vh;
  padding: 20px;
  color: #000;
  -webkit-box-shadow: 0px 5px 10px -2px rgba(34, 60, 80, 0.2); 
  -moz-box-shadow: 0px 5px 10px -2px rgba(34, 60, 80, 0.2); 
  box-shadow: 0px 5px 10px -2px rgba(34, 60, 80, 0.2);
`

function Addition(props) {
  return (
    <Container>Какая-то доп.инфа</Container>
  )
}

export default Addition;
