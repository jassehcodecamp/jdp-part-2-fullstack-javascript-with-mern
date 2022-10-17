import React from "react"

const AppInput = ({
  className = "lg:tex-sm xl:text-base border 2xl:py-3.5 xl:py-3 py-2 px-4 sm:py-2.5 text-primary-700 placeholder:text-primary-300 w-full rounded-lg xl:rounded-xl tracking-wide border-primary-300 outline-none focus:border-double focus:border-transparent focus:border-1 focus:[background-image:linear-gradient(white,_white),_linear-gradient(to_right,_hsl(249,_99%,_64%),_hsl(278,_94%,_30%))] focus:[background-clip:padding-box,_border-box]",
  ...otherProps
}) => {
  return <input {...otherProps} className={className} />
}

export default AppInput
