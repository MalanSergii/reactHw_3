export default function Filter({ onFilterChange, filterValue }) {
  return (
    <>
      <p>Filter</p>
      <label>
        <input
          onChange={e => {
            onFilterChange(e.target.value);
          }}
          value={filterValue}
          name="filter"
        ></input>
        Find contacts by name
      </label>
    </>
  );
}
