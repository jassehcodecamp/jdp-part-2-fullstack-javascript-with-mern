import fetch from "node-fetch"

// const fetch = require("node-fetch")
console.log("Hello World!")

console.log("I am learning Node JS")

console.log(process.version)

// fetch("https://api.github.com/users/jassehomar").then()

// JavaScript promises with then
/* fetch("https://api.github.com/users/jassehomar")
  .then((response) => response.json())
  .then((data) => console.log(data)) */

// JavaScript Async & Await
const response = await fetch("https://api.github.com/users/jassehomar")

console.log(response.status)
console.dir(response)
const data = await response.json()

console.log(data)
