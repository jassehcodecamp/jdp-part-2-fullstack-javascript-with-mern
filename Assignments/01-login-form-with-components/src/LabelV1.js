import React from 'react'

const Label = (props) => {
  return (
    <label 
      htmlFor={props.id}
      className={props.className}
    >{props.children || props.text}</label>
  )
}

export default Label