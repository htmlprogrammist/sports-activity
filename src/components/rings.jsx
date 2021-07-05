import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import Chart from "react-apexcharts"

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

const countThreeSeriesInPercentage = (a, b, c) => {
  return [a, b, c]
}

let state = {
  series: countThreeSeriesInPercentage(10, 30, 45),
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

const ActivityRings = () => (
  <Wrapper>
    <Card width="auto">
      <CardHeader>
        <CardText size="1rem" opacity={0.75}>
          Today
        </CardText>
        {/* <CardText size="0.75rem" opacity={0.5}> */}
        {/* <CardText size="1rem" opacity={0.75}>
          Today
        </CardText> */}
      </CardHeader>
      <ChartWrapper
        options={state.options}
        series={state.series}
        type="radialBar"
      />
    </Card>
    <h1>Шаги: 10000</h1>
  </Wrapper>
)

export default ActivityRings
