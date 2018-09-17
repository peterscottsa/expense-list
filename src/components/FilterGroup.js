import React from 'react'
import styled from 'styled-components'
import { colors, spacing } from 'common'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Label = styled.span`
  font-size: 12px;
  white-space: nowrap;
  font-weight: bold;
  color: ${colors.abbey};
  margin-right: ${spacing.medium}px;
`

const FilterGroup = ({ label, children }) => (
  <Wrapper>
    <Label>{ label }</Label>
    { children }
  </Wrapper>
)

export default FilterGroup