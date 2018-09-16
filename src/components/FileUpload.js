import React from 'react'
import styled from 'styled-components'
import { colors, spacing } from 'common'
import { darken, lighten } from 'polished'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Label = styled.label`
  padding: ${spacing.small}px;
  background: ${ props => props.disabled ?  lighten(0.1, colors.veniceBlue) : colors.veniceBlue };
  color: white;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.2s background ease-out;
  border: none;
  pointer-events: ${ props => props.disabled ?  'none' : 'auto' };
  margin-bottom: ${spacing.medium}px;
  
  &:hover {
    background: ${darken(0.01, colors.veniceBlue)};
  }
`
const CurrentFile = styled.span`
  font-size: 12px;
`

const HiddenInput = styled.input`
  display: none;
`

const FileUpload = ({field, form: { touched, errors }, ...props}) => (
  <Wrapper>
    <Label htmlFor={field.name}>Upload a file</Label>

    <CurrentFile>
      { props.fileName ? props.fileName : 'No file selected' }
    </CurrentFile>

    <HiddenInput id={field.name}
                 {...field}
                 {...props} />
  </Wrapper>
)

export default FileUpload

