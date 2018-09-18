import React, { Fragment } from 'react'
import { countryHelper } from 'common/colors'
import { adopt } from 'react-adopt'
import { Expenses, Filters, Pagination } from 'containers'
import { FilterBar, AddComment, AddReceipt } from 'compounds'
import { DataGrid, HeaderCell, Cell, CenteredRow, DataRow, Modal, Title, StatusChip } from 'components'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'

const ComposedContainer = adopt({
  expensesProps: <Expenses fetchOnMount />,
  filtersProps: <Filters />,
  paginationProps: <Pagination />
})

const GridHeader = () =>
  <Fragment>
    <HeaderCell>Currency</HeaderCell>
    <HeaderCell>Amount</HeaderCell>
    <HeaderCell>Merchant</HeaderCell>
    <HeaderCell>User name</HeaderCell>
    <HeaderCell>Date</HeaderCell>
    <HeaderCell />
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
  <ComposedContainer>
    { ({
         expensesProps: { expenses, listCount, ...expensesProps },
         filtersProps,
         paginationProps
    }) =>
      <Wrapper>
        <CenteredRow>
          <Title>Expenses list</Title>
          <FilterBar
            {...filtersProps}
            {...paginationProps} />

          <DataGrid>
            <GridHeader />
            { !!expenses &&
              expenses.map( expense =>
                <ExpenseRow key={expense.id}
                            expense={expense} />
            ) }
          </DataGrid>
        </CenteredRow>

        <Modal path="/:id/comment" closePath="/">
          <AddComment
            addComment={expensesProps.addComment}
            expensesById={expensesProps.expensesById}
            isLoading={expensesProps.isLoading} />
        </Modal>

        <Modal path="/:id/receipt" closePath="/">
          <AddReceipt
            addReceipt={expensesProps.addReceipt}
            isLoading={expensesProps.isLoading}
            uploadProgress={expensesProps.uploadProgress} />
        </Modal>
      </Wrapper>
    }
  </ComposedContainer >
)

export default ExpensesIndex