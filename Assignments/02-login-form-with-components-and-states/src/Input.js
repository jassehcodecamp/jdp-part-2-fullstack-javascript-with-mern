import React from "react"

const Input = ({ type, id, ...otherProps }) => {
  return <input type={type} id={id} {...otherProps} />
}

export default Input
