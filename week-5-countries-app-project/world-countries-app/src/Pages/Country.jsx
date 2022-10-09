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

      <div className="country-details-wrapper">
        <div className="country-flag-container">
          <img src={country.flags.svg} alt="" />
        </div>

        <div className="country-info-wrapper">
          <h2>{country.name.common}</h2>
          <div className="country-info">
            <ul>
              <li>
                Native Name:{" "}
                <span>
                  {/* {JSON.stringify(country.name.nativeName)}{" "} */}
                  {/* {JSON.stringify(Object.values(country.name.nativeName))} */}
                  {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                  {Object.values(country.name.nativeName)[0].official}
                </span>
              </li>
              <li>
                Population: <span>{country.population.toLocaleString()}</span>
              </li>
              <li>
                Region: <span>{country.region}</span>
              </li>
              <li>
                Sub Region: <span>{country.subregion}</span>
              </li>
              <li>
                Capital: <span>{country?.capital[0] || "N/A"}</span>
              </li>
            </ul>

            <ul>
              <li>
                Top Level Domain: <span>{country.tld[0]}</span>
              </li>
              <li>
                Currencies:{" "}
                <span>
                  {Object.values(country.currencies).map((currency) => (
                    <span key={currency.name}>{currency.name}</span>
                  ))}
                </span>
              </li>
              <li>
                Languages:{" "}
                <span>
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
            <ul>
              <li>
                <span>Border Countries: </span>
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
                  }) || <span> No Borders</span>}
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
