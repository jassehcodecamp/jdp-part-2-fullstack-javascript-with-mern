import http from "http"

const server = http.createServer((request, response) => {
  response.end("<h1>Hello From My Node Server!</h1>")
})

server.listen(1234, "localhost", () => {
  console.log("Server started running on http://localhost:1234")
})
