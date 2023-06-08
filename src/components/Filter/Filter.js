export default function Filter({ onFilter, filterValue }) {
  return (
    <>
      <p>Filter</p>
      <label>
        <input
          onChange={e => {
            onFilter(e.target.value);
          }}
          value={filterValue}
          name="filter"
        ></input>
        Find contacts by name
      </label>
    </>
  );
}
