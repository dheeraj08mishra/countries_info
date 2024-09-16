import { useState } from "react";
const Search = ({ data, setCountriesData }) => {
  const [searchValue, setSearchValue] = useState("");
  const inputValueForSearch = (event) => {
    setSearchValue(event.target.value);
    const filteredData = data.filter((currentRow) =>
      currentRow.name.common
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setCountriesData(filteredData);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search countries..."
        onChange={inputValueForSearch}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
