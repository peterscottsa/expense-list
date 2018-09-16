import React from 'react'
import styled from 'styled-components'
import { colors } from 'common'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 8px;
  overflow: hidden;
`
const Progress = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background: ${colors.caribbean}
  width: ${props => props.progress}%;
  transition: 0.1s width;
`

const ProgressBar = props => (
  <Wrapper>
    <Progress progress={props.progress} />
  </Wrapper>
)

export default ProgressBar