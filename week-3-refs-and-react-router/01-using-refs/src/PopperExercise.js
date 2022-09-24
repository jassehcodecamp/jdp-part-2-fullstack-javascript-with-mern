import React from "react"
// import { createPopper } from "@popperjs/core"
import * as Popper from "@popperjs/core"

import "./PoperExercise.css"

let popperInstance
const showEvents = ["mouseenter", "focus"]
const hideEvents = ["mouseleave", "blur"]

function PopperExercise() {
  const button = React.useRef(null)
  const tooltip = React.useRef(null)

  React.useEffect(() => {
    popperInstance = Popper.createPopper(button.current, tooltip.current, {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    })

    showEvents.forEach((event) => {
      button.current.addEventListener(event, show)
    })

    hideEvents.forEach((event) => {
      button.current.addEventListener(event, hide)
    })
  }, [])

  function show() {
    // Make the tooltip visible
    tooltip.current.setAttribute("data-show", "")

    // Enable the event listeners
    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: "eventListeners", enabled: true },
      ],
    }))

    // Update its position
    popperInstance.update()
  }

  function hide() {
    // Hide the tooltip
    tooltip.current.removeAttribute("data-show")

    // Disable the event listeners
    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: "eventListeners", enabled: false },
      ],
    }))
  }

  return (
    <div>
      <button ref={button} id="button" aria-describedby="tooltip">
        My button
      </button>
      <div ref={tooltip} id="tooltip" role="tooltip">
        My tooltip
        <div id="arrow" data-popper-arrow></div>
      </div>
    </div>
  )
}

export default PopperExercise
