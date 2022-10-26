import { useState } from "react"
import CreditCardForm from "./CreditCardForm"
import FormSubmitted from "./FormSubmitted"

const AppMain = ({ cardDetails, resetCardDetails }) => {
  const [formState, setFormState] = useState("idle")

  return (
    <main className="flex-1 flex-col flex items-center">
      <div className="w-full 2xl:max-w-lg lg:max-w-md md:max-w-lg md:py-8 sm:px-10 sm:py-12 px-8 py-8 lg:py-4 lg:px-6 2xl:py-0 2xl:px-0 mt-[4.5rem] sm:mt-16 md:my-auto">
        {formState !== "submitted" ? (
          <CreditCardForm
            {...cardDetails}
            formState={formState}
            setFormState={setFormState}
          />
        ) : (
          <FormSubmitted
            setFormState={setFormState}
            {...cardDetails}
            resetCardDetails={resetCardDetails}
          />
        )}
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
