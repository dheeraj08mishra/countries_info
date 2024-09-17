import React, { useState, useEffect } from "react";
const FilterByRegion = ({ data, setCountriesData }) => {
  const [regionValue, setRegionValue] = useState("");
  useEffect(() => {
    const filterInfo = () => {
      let filterData = [...data];
      if (regionValue) {
        filterData = filterData.filter(
          (country) => country.region === regionValue
        );
      }
      setCountriesData(filterData);
    };

    filterInfo();
  }, [regionValue, data, setCountriesData]);

  return (
    <div className="filter-by-region">
      <label htmlFor="filter-by-region">Filter by Region:</label>
      <select
        id="filter-by-region"
        value={regionValue}
        onChange={(e) => setRegionValue(e.target.value)}
      >
        <option value="">Default</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
      </select>
    </div>
  );
};

export default FilterByRegion;
