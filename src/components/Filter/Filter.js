import { FilterText, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter({ onFilterChange, filterValue }) {
  return (
    <FilterLabel>
      <input
        onChange={e => {
          onFilterChange(e.target.value);
        }}
        value={filterValue}
        name="filter"
      ></input>
      <FilterText>Find contacts by name</FilterText>
    </FilterLabel>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
