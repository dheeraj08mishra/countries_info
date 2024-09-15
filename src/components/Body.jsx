import React, { useEffect, useState } from "react";

const Body = () => {
  const [CountriesData, setCountriesData] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountriesData(data);
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <div className="countries-grid">
        {CountriesData.map((country, index) => {
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
        })}
      </div>
    </div>
  );
};

export default Body;
