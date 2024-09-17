import React, { useState, useEffect } from "react";

const SortBy = ({ data, setCountriesData }) => {
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const sortData = () => {
      let sortedData = [];
      if (sortBy === "name") {
        sortedData = [...data].sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      } else if (sortBy === "population") {
        sortedData = [...data].sort((a, b) => a.population - b.population);
      } else if (sortBy === "") {
        sortedData = [...data];
      }
      setCountriesData(sortedData);
    };

    sortData();
  }, [sortBy, data, setCountriesData]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sort-by">
      <label htmlFor="sort-by">Sort by:</label>
      <select id="sort-by" value={sortBy} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </div>
  );
};

export default SortBy;
