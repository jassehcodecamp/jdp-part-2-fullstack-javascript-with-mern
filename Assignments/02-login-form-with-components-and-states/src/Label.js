import React from 'react'

const Label = ({id, className, text, children}) => {
  return (
    <label 
      htmlFor={id}
      className={className}
    >{children || text}</label>
  )
}

export default Label