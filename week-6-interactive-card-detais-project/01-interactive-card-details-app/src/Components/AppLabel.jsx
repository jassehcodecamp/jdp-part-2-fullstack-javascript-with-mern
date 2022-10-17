import React from "react"

const AppLabel = ({
  className = "uppercase block mb-1.5 text-primary-600 text-sm tracking-widest lg:text-sm xl:text-base",
  ...otherProps
}) => {
  return <label {...otherProps} className={className} />
}

export default AppLabel
