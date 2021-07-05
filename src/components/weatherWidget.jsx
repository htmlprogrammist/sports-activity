import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background: linear-gradient(180deg, #1C86B4 0%, #3EAEDE 100%);
  border-radius: 14px;
  height: 44vh;
  padding: 20px;
  color: #FFF;
  margin: 20px;
`

const weatherWidget = () => (
  <Container>Виджет погоды</Container>
)

export default weatherWidget;
