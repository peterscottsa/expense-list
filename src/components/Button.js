import styled from 'styled-components'
import { colors, spacing } from 'common'
import { darken, lighten } from 'polished'

const Button = styled.button`
  appearance: none;
  padding: ${spacing.small}px ${spacing.medium}px;
  background: ${ props => props.disabled ?  lighten(0.2, colors.caribbean) : colors.caribbean };
  color: white;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.2s background ease-out;
  border: none;
  pointer-events: ${ props => props.disabled ?  'none' : 'auto' };
  
  &:hover {
    background: ${darken(0.05, colors.caribbean)};
  }
`

export default Button