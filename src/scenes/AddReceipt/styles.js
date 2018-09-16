import styled from 'styled-components'
import { spacing } from 'common'

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${spacing.medium}px;
  
  & > button {
    margin-right: ${spacing.medium}px;
  }
  
  & > div {
    width: 50%;
  }
`