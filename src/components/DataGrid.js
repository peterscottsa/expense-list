import styled from 'styled-components'
import { lighten } from 'polished'
import { spacing, colors } from 'common'

const DataGrid = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 100px repeat(5, 1fr);
  grid-auto-columns: 100%;
  border: 1px solid ${colors.athens};
`

const HeaderCell = styled.div`
  padding: ${spacing.medium}px ${spacing.small}px;
  font-weight: bold;
  border-bottom: 1px solid ${colors.athens};
`

const DataRow = styled.div`
  display: grid;
  grid-column: span 6;
  grid-template-columns: 100px repeat(5, 1fr);
  
  &:hover {
    transition: 0.15s background;
    background: ${lighten(0.65, colors.blueLagoon)};
  }
  
  & + & {
    border-top: 1px dashed ${colors.athens}; 
  }
`

const Cell = styled.div`
  padding: ${spacing.small}px;
  color: #333;
  text-align: ${({ align }) => align};
`

Cell.defaultProps = { align: 'left' }

export { DataGrid, HeaderCell, Cell, DataRow }