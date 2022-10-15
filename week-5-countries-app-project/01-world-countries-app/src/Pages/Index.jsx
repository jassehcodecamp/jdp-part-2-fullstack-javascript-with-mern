import React, { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import SearchIcon from "../Components/SearchIcon"
import CountryCard from "../Components/CountryCard"
import { countriesCached } from "../cache/countries"

export async function loader() {
  if (countriesCached.all) {
    return countriesCached.all
  }

  const response = await fetch("https://restcountries.com/v3.1/all")

  const countries = await response.json()

  countriesCached.all = countries
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
        {filteredCountries.map((country, index) => {
          return <CountryCard country={country} key={index} />
        })}
      </div>
    </>
  )
}

export default Index
