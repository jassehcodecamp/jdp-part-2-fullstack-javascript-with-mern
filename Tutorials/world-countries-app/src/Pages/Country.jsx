import React, { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"
import "./../App.css"

export async function loader({ params }) {
  console.log(params)
  /* fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCountries(data)
        setFilteredCountries(data)
      }) */
  const response = await fetch(
    "https://restcountries.com/v3.1/name/" + params.countryName
  )

  const country = await response.json()

  return country[0]
  // const contact = await getContact(params.contactId)
  // if (!contact) {
  //   throw new Response("", {
  //     status: 404,
  //     statusText: "Not Found",
  //   })
  // }
  // return contact
}

function Country() {
  const country = useLoaderData()
  console.log("country data", country)
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
        <div>Country Details Here: {JSON.stringify(country)}</div>
      </main>
      <footer></footer>
    </>
  )
}

export default Country
