import React, { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import SearchIcon from "../Components/SearchIcon"

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all")

  const countries = await response.json()
  return countries
}

function Index() {
  const [countryName, setCountryName] = useState("")
  const [region, setRegion] = useState("")
  const countries = useLoaderData()
  const [filteredCountries, setFilteredCountries] = useState([...countries])

  function handleChangeCountryName(event) {
    setCountryName(event.target.value)
    filterCountries(event.target.value)
  }

  function handleChangeRegion(event) {
    setRegion(event.target.value)
    filterCountriesByRegion(event.target.value)
  }

  function filterCountries(name) {
    let filtered = countries
      .filter((country) => {
        return country.name.common.toLowerCase().includes(name.toLowerCase())
      })
      .filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase())
      })

    setFilteredCountries(filtered)
  }

  function filterCountriesByRegion(region) {
    let filtered = countries
      .filter((country) => {
        return country.region.toLowerCase().includes(region.toLowerCase())
      })
      .filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(countryName.toLowerCase())
      })

    setFilteredCountries(filtered)
  }

  return (
    <>
      <div className="filters">
        <form action="">
          <div className="input-wrapper">
            <SearchIcon style={{ width: "20px" }} />
            <input
              className="search-input"
              value={countryName}
              type="text"
              placeholder="Search for a country..."
              onChange={handleChangeCountryName}
            />
          </div>

          <div className="select-wrapper">
            <select
              className="select-input"
              name="region"
              value={region}
              id="region"
              onChange={handleChangeRegion}
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </form>
      </div>

      <div className="countries">
        {filteredCountries.map((country) => {
          return (
            <div className="country-card" key={country.name.common}>
              <div className="card-header">
                <Link to={`/countries/${country.name.common}`}>
                  <img
                    className="flag"
                    src={country.flags.png}
                    alt="The Gambia Flag"
                  />
                </Link>
              </div>
              <div className="card-body">
                <h2>{country.name.common}</h2>
                <ul className="country-info">
                  <li className="contry-info-content-wrapper">
                    <strong className="country-info-label">Population:</strong>{" "}
                    <span>{country.population.toLocaleString()}</span>
                  </li>
                  <li className="contry-info-content-wrapper">
                    <strong className="country-info-label">Region:</strong>{" "}
                    <span>{country.region}</span>
                  </li>
                  <li className="contry-info-content-wrapper">
                    <strong className="country-info-label">Capital: </strong>
                    <span>{country.capital ? country.capital[0] : "N/A"}</span>
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Index
