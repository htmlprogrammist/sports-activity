import React from "react"
import styled from "styled-components"

const Container = styled.section`
  border-radius: 14px;
`

const FormGoal = () => (
  <Container>
    <h1>Выберите цель:</h1>
    <div id="input-goal">
      <input placeholder="Подвижность" id="mobility" type="number"/>
      <input placeholder="Упражнения" id="exercises" type="number"/>
      <input placeholder="Активность" id="activity" type="number"/>
      <input placeholder="Шаги" id="steps" type="number"/>
      <button>Submit</button>
    </div>
  </Container>
)

export default FormGoal
