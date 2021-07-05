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
  </Wrapper>
)

export default ActivityRings;
