import React from "react"

import IconCompleteIcon from "../assets/images/icon-complete.svg"
import AppButton from "./AppButton"
const FormSubmitted = ({ setFormState, resetCardDetails }) => {
  return (
    <div className="w-full max-w-lg lg:max-w-xl mx-auto text-center py-2 px-4 mt-8 sm:mt-16 lg:mt-0">
      <div>
        <div className="h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 mx-auto">
          <img src={IconCompleteIcon} className="w-full" alt="Thank you Icon" />
        </div>
        <h2 className="text-primary text-xl lg:text-2xl 2xl:text-3xl uppercase tracking-widest mt-10">
          Thank you!
        </h2>
        <p className="text-primary-400 mt-3 lg:mt-4">
          We have added your card details
        </p>
      </div>

      <div className="mt-8 lg:mt-10 xl:mt-12">
        <AppButton
          onClick={() => {
            setFormState("idle")
            resetCardDetails()
          }}
          type="button"
        >
          Continue
        </AppButton>
      </div>
    </div>
  )
}

export default FormSubmitted
