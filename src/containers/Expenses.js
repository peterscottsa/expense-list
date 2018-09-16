import React, { Component } from 'react'
import { connect } from 'react-redux'
import { expensesModule } from '../redux/modules'
import { computedExpenses } from '../redux/selectors/expenses'


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
  expenses: computedExpenses(state),
  isLoading: state.expenses.utils.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(expensesModule.fetch()),
  addComment: (id, comment) => dispatch(expensesModule.addComment(id, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
