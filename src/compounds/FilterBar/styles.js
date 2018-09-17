import styled from 'styled-components'
import { colors, spacing } from 'common'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border: 1px solid ${colors.alabaster};
  padding: ${spacing.medium}px;
  margin-bottom: ${spacing.medium}px;
  
  & > * {
    margin-right: ${spacing.large}px;
  }
`