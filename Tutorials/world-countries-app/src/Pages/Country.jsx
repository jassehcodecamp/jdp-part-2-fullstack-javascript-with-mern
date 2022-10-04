import React from "react"
import { useLoaderData } from "react-router-dom"
import "./../App.css"

export async function loader({ params }) {
  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + params.countryName
  )

  const country = await response.json()

  return country[0]
}

function Country() {
  const country = useLoaderData()
  return <div>Country Details Here: {JSON.stringify(country)}</div>
}

export default Country
