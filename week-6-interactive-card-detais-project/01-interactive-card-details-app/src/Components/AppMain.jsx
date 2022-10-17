import React from "react"
import AppInput from "./AppInput"
import AppLabel from "./AppLabel"

const AppMain = () => {
  return (
    <main className="flex-1 flex-col flex items-center">
      <div className="w-full 2xl:max-w-lg lg:max-w-md md:max-w-lg md:py-8 sm:px-10 sm:py-12 px-8 py-8 lg:py-4 lg:px-6 2xl:py-0 2xl:px-0 mt-[4.5rem] sm:mt-16 md:my-auto">
        <form action="#">
          <div className="xl:space-y-7 2xl:space-y-8 space-y-6">
            <div>
              <AppLabel htmlFor="cardholder-name">Cardholder Name</AppLabel>
              <AppInput id="cardholder-name" placeholder="e.g: Buba Conteh" />
            </div>

            <div>
              <AppLabel htmlFor="card-number">Card Number</AppLabel>
              <AppInput
                id="card-number"
                placeholder="e.g: 1234 5678 9101 0000"
              />
            </div>

            <div className="flex space-x-6">
              <div>
                <AppLabel htmlFor="expiry">Exp. Date (MM/YY)</AppLabel>
                <div className="flex space-x-4">
                  <AppInput placeholder="MM" id="expiry" />
                  <AppInput placeholder="YY" />
                </div>
              </div>

              <div>
                <AppLabel htmlFor="cvc">CVC</AppLabel>
                <AppInput placeholder="e.g. 123" id="cvc" />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <button className="2xl:py-5 xl:py-[1.2rem] py-[1.1rem] px-2 leading-5 w-full bg-primary text-white tracking-wider rounded-lg xl:rounded-xl">
              Confirm
            </button>
          </div>
        </form>
      </div>

      <footer className="py-4 px-8 lg:py-6 text-center mt-auto md:mt-0">
        <p className="lg:text-gray-500 text-gray-400 lg:text-base text-sm ">
          &copy; JCC - Part 2 of the Junior Developer Program - 2022. All rights
          reserved.
        </p>
      </footer>
    </main>
  )
}

export default AppMain
