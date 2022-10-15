import React from "react"
import { Link } from "react-router-dom"

const CountryCard = ({ country }) => {
  return (
    <div className="country-card" key={country.name.common}>
      <div className="card-header">
        <Link to={`/countries/${country.name.common}`}>
          <img className="flag" src={country.flags.png} alt="The Gambia Flag" />
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
}

export default CountryCard
