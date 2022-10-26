import React from "react"

// "xl:left-36 left-20 -top-4 bg-[url('/assets/images/bg-card-front.png')] "
const CreditCard = ({ className, ...otherProps }) => {
  return (
    <div
      className={`lg:relative absolute bg-cover bg-center bg-no-repeat xl:h-[14rem] xl:w-104  2xl:h-64 2xl:w-120 h-48 w-80 sm:w-96 sm:h-[14.5rem] lg:h-48 lg:w-[22rem] rounded-lg overflow-hidden py-4 px-5 sm:py-6 sm:px-7 xl:py-6 xl:px-8 text-white md:hidden flex lg:flex flex-col items-start tracking-widest shadow-2xl ${className}`}
      {...otherProps}
    />
  )
}

export default CreditCard
