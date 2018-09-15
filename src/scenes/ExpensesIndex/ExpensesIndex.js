import React, { Fragment } from 'react'
import format from 'date-fns/format'
import Expenses from 'containers/Expenses'
import { DataGrid, HeaderCell, Cell, CenteredRow, DataRow } from 'components'
import { Wrapper } from './styles'

const GridHeader = props =>
  <Fragment>
    <HeaderCell>Currency</HeaderCell>
    <HeaderCell>Amount</HeaderCell>
    <HeaderCell>Merchant</HeaderCell>
    <HeaderCell>User name</HeaderCell>
    <HeaderCell>Date</HeaderCell>
  </Fragment>

const ExpenseRow = ({ expense }) =>
  <DataRow>
    <Cell>{ expense.amount.currency }</Cell>
    <Cell>{ expense.amount.value }</Cell>
    <Cell>{ expense.merchant }</Cell>
    <Cell>{ expense.user.first } { expense.user.last }</Cell>
    <Cell align="right">{ format(expense.date, 'DD MMM YYYY') }</Cell>
  </DataRow>

const ExpensesIndex = props => (
  <Expenses fetchOnMount>
    { ({ allIds, expensesById }) =>
      <Wrapper>
        <CenteredRow>
          <DataGrid>
            <GridHeader />

            { allIds.map( id =>
              <ExpenseRow key={id} expense={expensesById[id]} />
            ) }
          </DataGrid>
        </CenteredRow>
      </Wrapper>
    }
  </Expenses>
)

export default ExpensesIndex