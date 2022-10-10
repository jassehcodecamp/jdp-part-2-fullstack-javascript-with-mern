import React from "react"
import { useLoaderData, Link, useNavigate } from "react-router-dom"
import "./../App.css"
// import countries from "../data/countries"

import countries from "../data/countries.json"
import BackButton from "../Components/BackButton"

// console.log("countries json", countriesJson)

export async function loader({ params }) {
  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + params.countryName
  )

  const country = await response.json()

  return country[0]
}

function Country() {
  const country = useLoaderData()
  return (
    <div className="country-details-container">
      <div>
        <BackButton />
      </div>

      <div className="country-details">
        <div className="country-flag-container">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>

        <div className="country-info-container">
          <h2>{country.name.common}</h2>
          <div className="country-info-wrapper">
            <ul className="country-info">
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Native Name:</strong>{" "}
                <span className="country-info-text">
                  {Object.values(country.name.nativeName)[0].official}
                </span>
              </li>
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Population:</strong>{" "}
                <span className="country-info-text">
                  {country.population.toLocaleString()}
                </span>
              </li>
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Region:</strong>{" "}
                <span className="country-info-text">{country.region}</span>
              </li>
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Sub Region:</strong>{" "}
                <span className="country-info-text">{country.subregion}</span>
              </li>
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Capital:</strong>{" "}
                <span className="country-info-text">
                  {country?.capital[0] || "N/A"}
                </span>
              </li>
            </ul>

            <ul className="country-info">
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">
                  Top Level Domain:
                </strong>{" "}
                <span className="country-info-text">{country.tld[0]}</span>
              </li>

              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Currencies:</strong>{" "}
                <span className="country-info-text">
                  {Object.values(country.currencies).map((currency) => (
                    <span key={currency.name}>{currency.name}</span>
                  ))}
                </span>
              </li>

              <li className="country-info-content-wrapper">
                <strong className="country-info-label">Languages:</strong>{" "}
                <span className="country-info-text">
                  {Object.values(country.languages).join(", ")}
                  {/* {Object.values(country.languages).map((language, index) => (
                    <span style={{ "margin-right": "5px" }}>
                      {language}
                      {index != Object.values(country.languages).length - 1
                        ? ","
                        : ""}
                    </span>
                  ))} */}
                </span>
              </li>
            </ul>
          </div>

          <div className="country-borders-wrapper">
            <ul className="country-info">
              <li className="country-info-content-wrapper">
                <strong className="country-info-label">
                  Border Countries:{" "}
                </strong>
                <div className="country-borders">
                  {country.borders?.map((border) => {
                    const countryName = countries.find(
                      (country) => country.cca3 === border
                    ).name.common
                    return (
                      <Link
                        to={`/countries/${countryName}`}
                        className="badge"
                        key={border}
                      >
                        {countryName}
                      </Link>
                    )
                  }) || <span style={{ marginTop: "4px" }}> No Borders</span>}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country
