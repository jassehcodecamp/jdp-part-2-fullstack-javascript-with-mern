import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("<h1>Hello from my Node Express Server</h1>")
})

app.get("/about", (req, res) => {
  res.send("<h1>My About Us Page</h1>")
})

app.listen("1234", () => {
  console.log("Server started running on http://localhost:1234")
})
