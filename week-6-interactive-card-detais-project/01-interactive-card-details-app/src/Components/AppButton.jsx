import React from "react"

const AppButton = ({ className = "", ...otherProps }) => {
  return (
    <button
      className={`2xl:py-5 xl:py-[1.2rem] py-[1.1rem] px-2 leading-5 w-full bg-primary text-white tracking-wider rounded-lg xl:rounded-xl ${className}`}
      {...otherProps}
    />
  )
}

export default AppButton
