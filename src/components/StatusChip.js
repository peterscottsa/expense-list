import styled from 'styled-components'
import { colors, spacing } from 'common'

const StatusChip = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: ${ ({ background }) => background }
  padding: ${spacing.xsmall}px ${spacing.medium}px;
  border-radius: 15px;
  
  & a {
    color: white;
    text-decoration: none;
  }
`

StatusChip.defaultProps = {
  background: colors.abbey
}

export default StatusChip