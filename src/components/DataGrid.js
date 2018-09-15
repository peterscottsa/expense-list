import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { spacing, colors } from 'common'

const DataGrid = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 100px repeat(4, 1fr);
  grid-auto-columns: 100%;
`

const HeaderCell = styled.div`
  color: ${darken(0.05, colors.blueLagoon)};
  padding: ${spacing.medium}px ${spacing.small}px;
  background: ${lighten(0.3, colors.blueLagoon)};
  font-weight: bold;
`

const DataRow = styled.div`
  display: grid;
  grid-column: span 5;
  grid-template-columns: 100px repeat(4, 1fr);
  
  &:hover {
    transition: 0.15s background;
    background: ${lighten(0.6, colors.blueLagoon)};
  }
`

const Cell = styled.div`
  padding: ${spacing.small}px;
  color: #333;
  text-align: ${({ align }) => align};
  
  & + & {
    border-top: 1px dashed rgba(0, 0, 0, 0.05); 
  }
`

Cell.defaultProps = { align: 'left' }

export { DataGrid, HeaderCell, Cell, DataRow }