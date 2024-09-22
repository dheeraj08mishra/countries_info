import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const CountryInfo = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountryData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country data:", error);
        setLoading(false);
      }
    };
    fetchCountry();
  }, [name]);

  if (loading) {
    return <Shimmer />;
  }

  if (!countryData || countryData.length === 0) {
    return <h2>No country data found</h2>;
  }

  const country = countryData[0];

  return (
    <div className="country-container">
      <div className="country-flag">
        <img src={country.flags?.png} alt={country.name?.common} />
      </div>
      <div className="country-info">
        <h1>{country.name?.common}</h1>
        <h4>
          <span>Region:</span> {country.region}
        </h4>
        <h4>
          <span>Capital:</span>{" "}
          {country.capital ? country.capital.join(", ") : "No Capital"}
        </h4>
        <h4>
          <span>Population:</span> {country.population?.toLocaleString()}
        </h4>
        <h4>
          <span>Native name:</span>{" "}
          {country.name.nativeName
            ? Object.values(country.name.nativeName)[0]?.common ||
              "Not Available"
            : "Not Available"}
        </h4>
        <h4>
          <span>Official:</span> {country.name.official?.toLocaleString()}
        </h4>
        <h4>
          <span>Currencies:</span>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(", ")
            : "No Currencies Available"}
        </h4>
        <h4>
          <span>Sub-Region:</span> {country.subregion || "Not Available"}
        </h4>
        <h4>
          <span>Languages:</span>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "No Languages Available"}
        </h4>
        <h4>
          <span>Border Countries:</span>{" "}
          {country.borders ? country.borders.join(", ") : "No Border Countries"}
        </h4>
      </div>
    </div>
  );
};

export default CountryInfo;
