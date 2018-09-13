import React, { Component } from 'react'
import { connect } from 'react-redux'
import { expensesModule } from '../redux/modules'


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
  allIds: state.expenses.allIds,
})

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(expensesModule.fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
