import React from "react"
import "./App.css"

function App() {
  const [count, setCount] = React.useState(0)
  const [double, setDouble] = React.useState(1)

  React.useEffect(
    function () {
      const h1Element = document.querySelector("h1")
      h1Element.style.color = "darkblue"
      console.log("h1", h1Element)
    },
    [double]
  )

  return (
    <div className="App">
      <h1>Running Side Effects with useEffect</h1>

      <p>
        React.useEffect is a built-in hook that allows us to run some code (side
        effects) after react renders or re-renders our component.
      </p>

      <h2>Examples of Side Effects</h2>
      <ul>
        <li>Manipulating the DOM</li>

        <li>Fetching data from localStorage</li>

        <li>Using HTTP requests to fetch data from an API</li>
      </ul>

      <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      <button onClick={() => setDouble(double * 2)}>Double {double}</button>
    </div>
  )
}

export default App
