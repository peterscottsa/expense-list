import React, { Fragment } from 'react'
import Expenses from 'containers/Expenses'
import { DataGrid, HeaderCell, Cell, CenteredRow, DataRow, Modal, Title } from 'components'
import { Wrapper } from './styles'
import { EditExpense } from 'scenes'
import { Link } from 'react-router-dom'

const GridHeader = props =>
  <Fragment>
    <HeaderCell>Currency</HeaderCell>
    <HeaderCell>Amount</HeaderCell>
    <HeaderCell>Merchant</HeaderCell>
    <HeaderCell>User name</HeaderCell>
    <HeaderCell>Date</HeaderCell>
    <HeaderCell></HeaderCell>
  </Fragment>

const ExpenseRow = ({ expense }) =>
  <DataRow to={`/${expense.id}/comment`}>
    <Cell>{ expense.amount.currency }</Cell>
    <Cell>{ expense.amount.value }</Cell>
    <Cell>{ expense.merchant }</Cell>
    <Cell>{ expense.user.first } { expense.user.last }</Cell>
    <Cell>{ expense.date }</Cell>
    <Cell>
      <Link to={`/${expense.id}/comment`}>Add comment</Link>
      <Link to={`/${expense.id}/comment`}>Comment</Link> | <Link to={`/${expense.id}/receipt`}>Receipt</Link>
    </Cell>
  </DataRow>

const ExpensesIndex = props => (
  <Expenses fetchOnMount>
    { ({ expenses }) =>
      <Wrapper>
        <CenteredRow>
          <Title>Expenses list</Title>
          <DataGrid>
            <GridHeader />
            { Object.values(expenses).map( expense =>
              <ExpenseRow key={expense.id} expense={expense} />
            ) }
          </DataGrid>
        </CenteredRow>
        <Modal path="/:id/comment" closePath="/">
          <EditExpense />
        </Modal>
      </Wrapper>
    }
  </Expenses>
)

export default ExpensesIndex