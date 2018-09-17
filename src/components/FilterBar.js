import React from 'react'
import styled from 'styled-components'
import { colors, spacing } from 'common'
import { inc } from 'ramda'

const Wrapper = styled.section`
  background: white;
  border: 1px solid ${colors.alabaster};
  padding: ${spacing.medium}px;
  margin-bottom: ${spacing.medium}px;
`

const FilterBar = ({ filters, changeFilter, goToPage, currentPage, paginationState, itemsPerPage }) => (
  <Wrapper>
    <select value={filters['currency']} onChange={e => changeFilter('currency', e.target.value)}>
      <option value="">- Select a currency -</option>
      <option value="DKK">DKK</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
    </select>

    <input type="text" value={filters['merchant']} onChange={e => changeFilter('merchant', e.target.value)} />

    <select value={itemsPerPage}>
      <option value="">- Records per page -</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>

    <button
      disabled={paginationState.lastPage}
      onClick={() => goToPage(inc(currentPage))}>Next Page</button>
  </Wrapper>
)

FilterBar.defaultProps = {
  selectedCurrency: 'DKK'
}

export default FilterBar