import { FilterText, FilterLabel } from './Filter.styled';

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
