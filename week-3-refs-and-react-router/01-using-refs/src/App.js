import React, { useEffect, useRef } from "react"
import { createPopper } from "@popperjs/core"

import "./Popper.css"

function App() {
  const heading1 = useRef(null)
  const popcorn = useRef(null)
  const tooltip = useRef(null)

  console.log("This is the heading one, ", heading1)

  useEffect(() => {
    // heading1.current.style.color = "dodgerblue"

    createPopper(popcorn.current, tooltip.current, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
    createPopper(popcorn, tooltip, {
      placement: "top",
    })
  }, [])

  return (
    <div>
      <h1 ref={heading1} style={{ color: "white", marginBottom: "50px" }}>
        React Refs with useRef
      </h1>

      <div id="popcorn" aria-describedby="tooltip" ref={popcorn}></div>
      <div id="tooltip" role="tooltip" ref={tooltip}>
        My tooltip
        <div id="arrow" data-popper-arrow></div>
      </div>
    </div>
  )
}

export default App
