import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colors, spacing } from 'common'

const Wrapper = styled.div``

const Input = styled.textarea`
  font-size: 14px;
  width: 100%;
  height: 150px;
  appearance: none;
  resize: none;
  border: 1px solid;
  border-color: ${colors.alabaster};
  padding: ${spacing.medium}px;
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

const Error = styled.div`
  color: ${colors.persimmon};
  border: 1px solid ${colors.persimmon};
  background: ${lighten(0.27, colors.persimmon)};
  padding: ${spacing.small}px;
`

const TextArea = ({ field, form: { touched, errors }, ...props }) => (
  <Wrapper>
    <Input { ...field }
           { ...props } />
    { (touched && errors[field.name]) ? <Error>{ errors[field.name] }</Error> : null }
  </Wrapper>
)

export default TextArea