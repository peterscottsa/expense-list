import React from 'react'
import styled from 'styled-components'
import { colors, spacing } from 'common'


const Input = styled.input`
  font-size: 14px;
  width: 100%;
  appearance: none;
  resize: none;
  border: 1px solid;
  border-color: ${colors.caribbean};
  padding: ${spacing.small}px;
  margin: 0;
  outline: none;
  transition: 0.2s border-color ease-out;
  
  &:focus {
    border-color: ${colors.caribbean};    
  }
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`

const TextInput = props => <Input { ...props } />

export default TextInput