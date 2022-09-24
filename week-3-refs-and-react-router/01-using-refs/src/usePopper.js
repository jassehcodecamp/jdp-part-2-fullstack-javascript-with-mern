import React from "react"
import * as Popper from "@popperjs/core"

let popperInstance
const showEvents = ["mouseenter", "focus"]
const hideEvents = ["mouseleave", "blur"]

function usePopper(element, tooltip) {
  // if (!element || !tooltip) return

  React.useEffect(() => {
    if (!element || !tooltip) return
    popperInstance = Popper.createPopper(element, tooltip, {
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
      element.addEventListener(event, show)
    })

    hideEvents.forEach((event) => {
      element.addEventListener(event, hide)
    })

    function show() {
      // Make the tooltip visible
      tooltip.setAttribute("data-show", "")

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
      tooltip.removeAttribute("data-show")

      // Disable the event listeners
      popperInstance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: "eventListeners", enabled: false },
        ],
      }))
    }
  }, [element, tooltip])
}

export default usePopper
