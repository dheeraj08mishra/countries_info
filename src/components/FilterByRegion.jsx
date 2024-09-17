import React, { useState, useEffect } from "react";
const FilterByRegion = ({ data, setCountriesData }) => {
  console.log(data, setCountriesData);

  const [regionValue, setRegionValue] = useState("");

  useEffect(() => {
    const filterInfo = () => {
      let filterData = [];
      if (regionValue === "Africa") {
        filterData = [...data].filter((country) => country.region === "Africa");
      } else if (regionValue === "Americas") {
        filterData = [...data].filter(
          (country) => country.region === "Americas"
        );
      } else if (regionValue === "Asia") {
        filterData = [...data].filter((country) => country.region === "Asia");
      } else if (regionValue === "Europe") {
        filterData = [...data].filter((country) => country.region === "Europe");
      } else if (regionValue === "Oceania") {
        filterData = [...data].filter(
          (country) => country.region === "Oceania"
        );
      } else if (regionValue === "") {
        filterData = [...data];
      } else if (regionValue === "Antarctic") {
        filterData = [...data].filter(
          (country) => country.region === "Antarctic"
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
