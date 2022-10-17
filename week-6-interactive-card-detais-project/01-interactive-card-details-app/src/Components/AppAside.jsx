import React from "react"
import CreditCard from "./CreditCard"
import CardLogo from "../assets/images/card-logo.svg"

const AppAside = () => {
  return (
    <aside className="2xl:w-1/4 2xl:max-w-[30rem] xl:w-1/3 lg:w-[30%] lg:max-w-[22rem] xl:max-w-[26rem] md:w-1/3 w-full h-72 sm:h-92 md:h-auto bg-[url('/assets/images/bg-main-desktop.png')] bg-cover bg-center flex flex-col justify-center relative">
      <CreditCard className="z-10 -bottom-12 lg:bottom-0  left-8 sm:left-10 lg:left-[30%] xl:left-1/3 lg:-top-4 bg-[url('/assets/images/bg-card-front.png')]">
        <img src={CardLogo} alt="Card Logo" className="h-13" />

        <div className="mt-auto w-full">
          <div className="flex justify-between 2xl:text-3xl xl:text-2xl sm:text-2xl lg:text-xl text-xl">
            <span>0000</span> <span>0000</span> <span>0000</span>{" "}
            <span>0000</span>
          </div>

          <div className="flex justify-between mt-6 text-sm lg:text-base">
            <span className="uppercase">Buba Conteh</span>
            <span>00/00</span>
          </div>
        </div>
      </CreditCard>
      {/* xl:left-60 left-40  */}
      <CreditCard className="right-8 top-9 sm:top-10 lg:right-0 lg:left-[40%] xl:left-1/2 xl:top-7 lg:top-4 bg-[url('/assets/images/bg-card-back.png')]">
        <span className="absolute right-7 sm:right-12 top-[49%] lg:top-[49.6%] xl:right-14 lg:right-11  -translate-y-1/2 lg:text-base text-sm">
          000
        </span>
      </CreditCard>
    </aside>
  )
}

export default AppAside
