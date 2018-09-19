import React from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { filtersModule } from '../redux/modules'
import { paginationModule } from '../redux/modules'

const Filters = ({ children, ...props }) => children(props)

const mapStateToProps = state => ({
  filters: state.filters
})

const mapDispatchToProps = dispatch => ({
  changeFilter: (key, value) => {
    dispatch(paginationModule.goToPage(1))
    dispatch(filtersModule.changeFilter(key, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
