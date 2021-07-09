import React from "react"
import styled from "styled-components"

const Container = styled.section`
`

const Text = styled.p`
  margin: 0;
  padding: 0;
`

const daysInfo = (props) => (
  <Container>
    <Text>Шаги: {props.steps}</Text>
    <Text>Ккал: {props.kkal}</Text>
  </Container>
)

export default daysInfo;
