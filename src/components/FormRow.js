import styled from 'styled-components'
import { spacing } from 'common'

const FormRow = styled.div`
  & + & {
    margin-top: ${spacing.medium}px;
  }
`

export default FormRow