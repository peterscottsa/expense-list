import React from 'react'
import { FilterGroup, TextInput, Button } from 'components'
import { inc, dec } from 'ramda'
import { Wrapper } from './styles'

const FilterBar = ({ filters, changeFilter, goToPage, currentPage, paginationState, itemsPerPage }) => (
  <Wrapper>
    <FilterGroup label="Filter by currency">
      <select value={filters['currency']} onChange={e => changeFilter('currency', e.target.value)}>
        <option value="">- Select a currency -</option>
        <option value="DKK">DKK</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </FilterGroup>

    <FilterGroup label="Search merchants">
      <TextInput type="text"
                 value={filters['merchant']}
                 placeholder="Search for a merchant"
                 onChange={e => changeFilter('merchant', e.target.value)} />
    </FilterGroup>

    <Button
      disabled={paginationState.firstPage}
      onClick={() => goToPage(dec(currentPage))}>Prev Page</Button>

    <Button
      disabled={paginationState.lastPage}
      onClick={() => goToPage(inc(currentPage))}>Next Page</Button>
  </Wrapper>
)

FilterBar.defaultProps = {
  selectedCurrency: 'DKK'
}

export default FilterBar