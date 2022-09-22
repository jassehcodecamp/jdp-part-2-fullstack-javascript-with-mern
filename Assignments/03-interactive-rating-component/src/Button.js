import React from "react"

function Button({ onClick, className = "", children, ...otherProps }) {
  return (
    <button onClick={onClick} className={className} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
