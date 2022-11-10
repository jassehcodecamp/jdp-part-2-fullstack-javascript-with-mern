import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send(`
  <h1>Hello from my Node Express Server</h1>
  <a href="/about">About Us</a>
  <a href="/services">Services</a>
  <a href="/users/1">User</a>
  `)
})

app.get("/about", (req, res) => {
  res.send(`
    <h1>My About Us Page</h1>
    <a href="/about">About Us</a>
    <a href="/services">Services</a>
  `)
})

app.get("/services", (req, res) => {
  res.send("<h1>My Services Page</h1>")
})

// Dynamic routes
app.get("/users/:id", (req, res) => {
  console.log(req.query, req.params)
  const userId = req.params.id
  res.send(`<h1>User with id ${userId}</h1>`)
})

app.listen("1234", () => {
  console.log("Server started running on http://localhost:1234")
})
