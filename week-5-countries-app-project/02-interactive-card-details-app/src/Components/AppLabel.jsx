import React from "react"

const AppLabel = ({ className = "uppercase block mb-1", ...otherProps }) => {
  return <label {...otherProps} className={className} />
}

export default AppLabel
