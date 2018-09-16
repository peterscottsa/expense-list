import React, { Fragment } from 'react'
import { countryHelper } from 'common/colors'
import Expenses from 'containers/Expenses'
import { DataGrid, HeaderCell, Cell, CenteredRow, DataRow, Modal, Title, StatusChip } from 'components'
import { Wrapper } from './styles'
import { AddComment, AddReceipt } from 'scenes'
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
    <Cell>
      <StatusChip background={countryHelper[expense.amount.currency]}>
        { expense.amount.currency }
      </StatusChip>
    </Cell>
    <Cell>{ expense.amount.value }</Cell>
    <Cell>{ expense.merchant }</Cell>
    <Cell>{ expense.user.first } { expense.user.last }</Cell>
    <Cell>{ expense.date }</Cell>
    <Cell>
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
          <AddComment />
        </Modal>

        <Modal path="/:id/receipt" closePath="/">
          <AddReceipt />
        </Modal>
      </Wrapper>
    }
  </Expenses>
)

export default ExpensesIndex