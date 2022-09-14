import { Fragment, useState } from "react"
import "./App.css"
import Input from "./Input.js"
import Label from "./Label"
import Button from "./Button"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  // const isRememberMe = rememberMe ? "Yes" : "No"

  // let isRememberMe = "No"
  // if (rememberMe) {
  //   isRememberMe = "Yes"
  // }

  return (
    <Fragment>
      <main>
        <h1>Login Form</h1>
        <form action="">
          <div className="form-group">
            <Label id="email" text="Email Address" />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <Label id="password" text="Password" />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="form-group">
            <Label>
              <Input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />{" "}
              Remember Me
            </Label>
          </div>

          <div>
            <Button text="Sign In" />
          </div>
        </form>
        <div className="form-result">
          <p>
            Email: <strong>{email}</strong>
          </p>
          <p>
            Password: <strong>{password}</strong>
          </p>
          <p>
            Remember Me: <strong>{rememberMe ? "Yes" : "No"}</strong>
          </p>
        </div>
      </main>
      <footer>
        <p>
          &copy; The Junior Developer Program 2022 - Part 2 Fullstack JavaScript
          With MERN.
        </p>
        <p>
          <small>All rights reserved. JassehCodeCamp</small>
        </p>
      </footer>
    </Fragment>
  )
}

export default App
