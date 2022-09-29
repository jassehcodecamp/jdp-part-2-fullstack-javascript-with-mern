import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log("countries data", Array.isArray(data))
        setCountries(data)
      })
  }, [])
  return (
    <>
      <header>
        <div>
          <h1>Where in the world?</h1>

          <div>
            <span>Dark Mode</span>
          </div>
        </div>
      </header>
      <main>
        <div className="filters">
          <form action="">
            <div>
              <input type="text" placeholder="Search for a country" />
            </div>

            <div>
              <select name="region" id="region">
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
          {countries.map((country) => {
            return (
              <div className="country-card" key={country.name.common}>
                <div className="card-header">
                  <img
                    className="flag"
                    src={country.flags.png}
                    alt="The Gambia Flag"
                  />
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
                      <span>
                        {country.capital ? country.capital[0] : "N/A"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export default App
