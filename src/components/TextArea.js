import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colors, spacing } from 'common'

const Wrapper = styled.div``

const Input = styled.textarea`
  appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: ${spacing.small}px;
  margin: 0;
`

const Error = styled.div`
  color: ${colors.persimmon};
  border: 1px solid ${colors.persimmon};
  background: ${lighten(0.27, colors.persimmon)};
  padding: ${spacing.small}px;
`

const TextArea = ({ field, ...props }) => (
  <Wrapper>
    <Input { ...field }
           { ...props } />
    <Error>This is an error</Error>
    { field.error ? <Error>{ field.error }</Error> : null }
  </Wrapper>
)

export default TextArea