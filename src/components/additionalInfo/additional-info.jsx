import React from "react"
import styled from "styled-components"
import FormGoal from "./goal"

const Container = styled.section`
  border-radius: 14px;
`

const AdditionalInfo = () => (
  <Container>
    <p>Дополнительная инфа</p>
    <FormGoal />
  </Container>
)

export default AdditionalInfo
