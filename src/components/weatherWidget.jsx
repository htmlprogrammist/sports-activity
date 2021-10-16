import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background: linear-gradient(180deg, #1C86B4 0%, #3EAEDE 100%);
  border-radius: 14px;
  height: 30vh;
  padding: 20px;
  color: #FFF;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(34, 60, 80, 0.2); 
  -moz-box-shadow: 0px 5px 10px 0px rgba(34, 60, 80, 0.2); 
  box-shadow: 0px 5px 10px 0px rgba(34, 60, 80, 0.2);
`

const weatherWidget = () => (
  <Container>Виджет погоды</Container>
)

export default weatherWidget;
