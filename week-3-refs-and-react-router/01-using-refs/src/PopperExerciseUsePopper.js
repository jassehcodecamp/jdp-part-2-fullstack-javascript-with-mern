import React from "react"
// import { createPopper } from "@popperjs/core"
import usePopper from "./usePopper"

import "./PoperExercise.css"

function PopperExercise() {
  const button = React.useRef(null)
  const tooltip = React.useRef(null)

  const div = React.useRef(null)
  const divTooltip = React.useRef(null)

  usePopper(button.current, tooltip.current)
  usePopper(div.current, divTooltip.current)

  return (
    <div>
      <button ref={button} id="button" aria-describedby="tooltip">
        My button
      </button>
      <div ref={tooltip} className="tooltip" role="tooltip">
        My tooltip
        <div id="arrow" data-popper-arrow></div>
      </div>
    </div>
  )
}

export default PopperExercise
