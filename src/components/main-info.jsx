import React from "react"
import styled from "styled-components"

function MainInfo(props) {
  const goodJob = props.goodJob
  if (goodJob) {
    return (
      <>
        <p>Good Job! Well done, mate!</p>
        <p>One more component in return</p>
      </>
    )
  } else {
    return (
      <>
        <p>Oh... man... don't get down.</p>
        <p>Even you may have not a good day</p>
      </>
    )
  }
}

export default MainInfo
