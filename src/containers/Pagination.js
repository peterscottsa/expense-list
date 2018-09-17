import React from 'react'
import { connect } from 'react-redux'
import { paginationModule } from '../redux/modules'
import { paginationState } from '../redux/selectors/expenses'

const Pagination = ({ children, ...props }) => children(props)

const mapStateToProps = state => ({
  currentPage: state.pagination.currentPage,
  itemsPerPage: state.pagination.itemsPerPage,
  paginationState: paginationState(state)
})

const mapDispatchToProps = dispatch => ({
  goToPage: value => dispatch(paginationModule.goToPage(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
