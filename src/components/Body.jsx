import React, { useEffect, useState } from "react";

const Body = () => {
  const [CountriesData, setCountriesData] = useState([]);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountriesData(data);
      setData(data);
    };
    fetchCountries();
  }, []);

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
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search countries..."
          onChange={inputValueForSearch}
          value={searchValue}
        />
      </div>

      <div className="countries-grid">
        {CountriesData.length > 0 ? (
          CountriesData.map((country, index) => {
            const { flags, name, region, capital, population } = country;
            return (
              <div key={index} className="country-card">
                <img src={flags.png} alt={name.common} />
                <h2>{name.common}</h2>
                <h4>Region: {region}</h4>
                <h4>Capital: {capital}</h4>
                <h4>Population: {population.toLocaleString()}</h4>
              </div>
            );
          })
        ) : (
          <div className="no-results">No countries found</div>
        )}
      </div>
    </>
  );
};

export default Body;
