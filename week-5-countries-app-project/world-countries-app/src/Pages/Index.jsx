import React, { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

export async function loader() {
  const response = await fetch("https://restcountries.com/v3.1/all")

  const countries = await response.json()
  console.log(countries)
  return countries
}

function Index() {
  const [countryName, setCountryName] = useState("")
  const [region, setRegion] = useState("")
  // const [countries, setCountries] = useState([])
  const countries = useLoaderData()
  const [filteredCountries, setFilteredCountries] = useState([...countries])

  /*  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCountries(data)
        setFilteredCountries(data)
      })
  }, []) */

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
          <div>
            <input
              value={countryName}
              type="text"
              placeholder="Search for a country"
              onChange={handleChangeCountryName}
            />
          </div>

          <div>
            <select
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
                <ul>
                  <li>
                    Population: <span>{country.population}</span>
                  </li>
                  <li>
                    Region: <span>{country.region}</span>
                  </li>
                  <li>
                    Capital:{" "}
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
