import React from 'react'
import styled from 'styled-components'
import {colors} from '../common'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`
const Progress = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: ${colors.blueLagoon}
  width: ${};
`

const ProgressBar = props => (
  <Wrapper>
    <Progress progress={props.progress} />
  </Wrapper>
)

export default ProgressBar