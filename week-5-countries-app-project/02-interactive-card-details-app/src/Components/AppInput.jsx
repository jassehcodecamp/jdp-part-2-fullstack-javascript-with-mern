import React from "react"

const AppInput = ({
  className = "border py-4 px-2 w-full rounded-xl",
  ...otherProps
}) => {
  return <input {...otherProps} className={className} />
}

export default AppInput
