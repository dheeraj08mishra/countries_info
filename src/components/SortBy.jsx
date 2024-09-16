import React, { useState } from "react";

const SortBy = ({ data, setCountriesData }) => {
  const [sortBy, setSortBy] = useState("");

  const handleSortData = (event) => {
    const selectedValue = event.target.value;
    setSortBy(selectedValue);
    let sortedData = [];

    // Default case when no sort option is selected
    if (selectedValue === "") {
      setCountriesData(data);
    }
    // Sort by name
    else if (selectedValue === "name") {
      sortedData = [...data].sort((currentRow, nextRow) =>
        currentRow.name.common.localeCompare(nextRow.name.common)
      );
      setCountriesData(sortedData);
    }
    // Sort by population
    else if (selectedValue === "population") {
      sortedData = [...data].sort(
        (currentRow, nextRow) => currentRow.population - nextRow.population
      );
      setCountriesData(sortedData);
    }
  };

  return (
    <div className="sort-by">
      <label htmlFor="sort-by">Sort by:</label>
      <select id="sort-by" value={sortBy} onChange={handleSortData}>
        <option value="">Default</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </div>
  );
};

export default SortBy;
