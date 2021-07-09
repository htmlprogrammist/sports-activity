import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import Chart from "react-apexcharts"
import DaysInfo from "./days-info"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  width: ${props => props.width};
  border-radius: 40px;
  background: #191919;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 42px;
`

const ChartWrapper = styled(Chart)`
  display: flex;
  justify-content: center;
`

const CardText = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => (props.bold ? 700 : 400)};
  color: ${props => rgba('white', props.opacity)};
`

let state = {
  options: {
    plotOptions: {
      radialBar: {
        hollow: { size: "28%" },
        dataLabels: {
          name: { show: false },
          value: { show: false }
        },
        track: {
          background: rgba('white', 0.0375)
        }
      }
    },
    stroke: { lineCap: 'round' },
    colors: ['#C200FB', '#2191FB', '#50FFB1']
  }
}

// может быть их в цикле рендерить? В цикле получаю данные с таблицы и отрисовываю каждый круг с полученными в цикле данными. Иначе я не знаю, как передать в каждый круг свои данные, если только не создавать массив и через a[a.length - 1] получать данные
// можно создать isToday и isYesterday в state, чтобы можно было стили рендерить другие (сегодня и вчера побольше, чем обычные штуки)
const ActivityRings = (props) => (
  <Wrapper>
    <Card width="auto">
      <CardHeader>
        <CardText size="1rem" opacity={0.75}>
          {props.day}
        </CardText>
      </CardHeader>
      <ChartWrapper
        options={state.options}
        series={props.series}
        type="radialBar"
      />
    </Card>
    <DaysInfo 
      steps={6543}
      kkal={401}
    />
  </Wrapper>
)

export default ActivityRings;
