import React, { Component } from 'react'
import { connect } from 'react-redux'
import { expensesModule } from '../redux/modules'
import { paginatedExpenses } from '../redux/selectors/expenses'
import { dec } from 'ramda'

class Expenses extends Component {
  componentDidMount() {
    this.props.fetchOnMount && this.props.fetch()
  }

  render() {
    const { children, ...props } = this.props
    return children(props)
  }
}

Expenses.defaultProps = {
  fetchOnMount: false
}

const mapStateToProps = state => ({
  expensesById: state.expenses.expensesById,
  expenses: paginatedExpenses(state),
  isLoading: state.expenses.utils.isLoading,
  uploadProgress: state.expenses.utils.progress
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(expensesModule.fetch()),
  addComment: (id, comment) => dispatch(expensesModule.addComment(id, comment)),
  addReceipt: (id, receipt) => dispatch(expensesModule.addReceipt(id, receipt))
})

export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
