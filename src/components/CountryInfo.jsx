import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const CountryInfo = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        setCountryData(data);
        setLoading(false);

        // Fetch border countries if available
        if (data[0].borders && data[0].borders.length > 0) {
          const borders = data[0].borders;
          const borderNames = await Promise.all(
            borders.map((border) =>
              fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                .then((response) => response.json())
                .then(([countryData]) => countryData.name.common)
            )
          );
          setBorderCountries(borderNames);
        }
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
    <>
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
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
            <span>Border Countries:</span>
            <div className="border-countries">
              {borderCountries.length > 0
                ? borderCountries.map((border, index) => (
                    <Link key={index} to={`/name/${border}`}>
                      {border}
                    </Link>
                  ))
                : "No Border Countries"}
            </div>
          </h4>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
