import styled from 'styled-components'
import { colors, spacing } from 'common'
import { darken } from 'polished'

const Button = styled.button`
  appearance: none;
  padding: ${spacing.small}px ${spacing.medium}px;
  background: ${ props => props.disabled ?  'rgba(0, 0, 0, 0.5)' : colors.caribbean };
  color: white;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  transition: 0.2s background ease-out;
  border: none;
  cursor: ${ props => props.disabled ?  'not-allowed' : 'pointer' };
  
  &:hover {
    background: ${ props => props.disabled ?  'rgba(0, 0, 0, 0.5)' : darken(0.05, colors.caribbean) };
  }
`

export default Button