import React from "react"
import styled from "styled-components"

const Container = styled.section`
  border-radius: 14px;
`

function Form(props) {
  const isGoal = props.isGoal
  if (isGoal) {
    return (
      <Container>
        <div id="input-goal">
          <input placeholder="Подвижность" id="mobility" type="number" />
          <input placeholder="Упражнения" id="exercises" type="number" />
          <input placeholder="Активность" id="activity" type="number" />
          <input placeholder="Шаги" id="steps" type="number" />
          <button id="form-submit">Submit</button>
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <div id="inputs-form">
          {/* <input type="date" id="datepicker" placeholder="Дата"/> */}
          <input id="datepicker" placeholder="Дата" />
          <input placeholder="Подвижность" id="mobility" type="number" />
          <input placeholder="Упражнения" id="exercises" type="number" />
          <input placeholder="Активность" id="activity" type="number" />
          <input placeholder="Шаги" id="steps" type="number" />
          <button id="form-submit">Submit</button>
        </div>
      </Container>
    )
  }
}

export default Form;
