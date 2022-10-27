import React, { useState } from "react"
import AppButton from "./AppButton"
import AppInput from "./AppInput"
import AppLabel from "./AppLabel"
import { FormControlErrorMessage } from "./FormControlErrorMessage"

const digitsOnly = "0123456789"
const currentYear = String(new Date().getFullYear()).slice(2)
const currentMonth = new Date().getMonth() + 1

const CreditCardForm = ({
  cardholderName,
  setCardholderName,
  cardNumber,
  setCardNumber,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cvc,
  setCvc,
  formState,
  setFormState,
}) => {
  const [errors, setErrors] = useState(null)

  // Clear error on the input when the user starts typing
  const clearInputError = (e) => {
    setErrors({ ...errors, [e.target.id]: null })
  }

  const isFormNotFilled =
    (errors && Object.values(errors).some((errorMessage) => errorMessage)) ||
    [cardholderName, cardNumber, expiryMonth, expiryYear, cvc].some(
      (value) => value == ""
    )

  /**********************************/
  /* Input validations starts here */
  /********************************/

  const handleCardNumberChange = (e) => {
    let value = e.target.value.split(" ").join("")

    if (!value.split("").every((digit) => digitsOnly.includes(digit))) {
      setErrors({ ...errors, cardNumber: "Wrong format, numbers only" })
    }

    if (e.nativeEvent.data) {
      value = value.split(/(\w{4})/).filter((word) => word.trim().length)

      if (
        value[value.length - 1].length === 4 &&
        value.join(" ").length + 1 <= 19
      ) {
        value.push(" ")
      }

      setCardNumber(value.join(" "))
    } else {
      setCardNumber(e.target.value)
    }
  }

  const validateCardNumberInput = () => {
    if (cardNumber.length && cardNumber.length !== 19) {
      return setErrors({ ...errors, cardNumber: "Invalid number of digits" })
    }
  }

  const validateExpiryMonthInput = () => {
    if (!expiryMonth.length) {
      return setErrors({ ...errors, expiryMonth: "Can't be blank" })
    }

    if (expiryMonth.length !== 2) {
      return setErrors({ ...errors, expiryMonth: "Invalid number of digits" })
    }

    if (expiryMonth < 1 || expiryMonth > 12) {
      return setErrors({ ...errors, expiryMonth: "Invalid Expiry Month" })
    }

    validateExpiryMonthAndYear()
  }

  const validateExpiryYearInput = () => {
    if (!expiryYear.length) {
      return setErrors({ ...errors, expiryYear: "Can't be blank" })
    }

    if (expiryYear.length !== 2) {
      return setErrors({ ...errors, expiryYear: "Invalid number of digits" })
    }

    if (expiryYear < currentYear) {
      return setErrors({ ...errors, expiryYear: "Invalid Expiry Year" })
    }

    validateExpiryMonthAndYear()
  }

  const validateExpiryMonthAndYear = () => {
    if (expiryMonth) {
      setErrors({ ...errors, expiryMonth: null })

      if (
        expiryMonth < currentMonth &&
        expiryYear &&
        expiryYear <= currentYear
      ) {
        return setErrors({ ...errors, expiryMonth: "Invalid Expiry Month!" })
      }
    }
  }

  const validateCVC = () => {
    if (!cvc.length) {
      return setErrors({ ...errors, cvc: "Can't be blank" })
    }
    if (!cvc.split("").every((digit) => digitsOnly.includes(digit))) {
      setErrors({ ...errors, cvc: "Wrong format, numbers only" })
    }

    if (cvc.length !== 3) {
      return setErrors({ ...errors, cvc: "Invalid number of digits" })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormState("processing")

    // simulate an ajax request time
    setTimeout(() => {
      setFormState("submitted")
    }, 1500)
  }

  return (
    <form action="#" onSubmit={handleSubmit} onInput={clearInputError}>
      <div className="xl:space-y-7 2xl:space-y-8 space-y-6">
        <div>
          <AppLabel htmlFor="cardholderName">Cardholder Name</AppLabel>
          <AppInput
            id="cardholderName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="e.g: Buba Conteh"
          />
        </div>

        <div>
          <AppLabel htmlFor="cardNumber">Card Number</AppLabel>
          <AppInput
            hasErrors={errors?.cardNumber}
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            onBlur={validateCardNumberInput}
            maxLength="19"
            placeholder="e.g: 1234 5678 9101 0000"
          />
          {errors?.cardNumber && (
            <FormControlErrorMessage errorMessage={errors.cardNumber} />
          )}
        </div>

        <div className="flex space-x-6">
          <div className="w-1/2">
            <AppLabel htmlFor="expiryMonth">Exp. Date (MM/YY)</AppLabel>
            <div className="flex space-x-4">
              <AppInput
                hasErrors={errors?.expiryMonth}
                id="expiryMonth"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                onBlur={validateExpiryMonthInput}
                placeholder="MM"
                minLength="2"
                maxLength="2"
              />
              <AppInput
                id="expiryYear"
                hasErrors={errors?.expiryYear}
                value={expiryYear}
                onBlur={validateExpiryYearInput}
                onChange={(e) => setExpiryYear(e.target.value)}
                placeholder="YY"
                minLength="2"
                maxLength="2"
              />
            </div>

            {(errors?.expiryMonth || errors?.expiryYear) && (
              <FormControlErrorMessage
                errorMessage={errors.expiryMonth || errors.expiryYear}
              />
            )}
          </div>

          <div className="w-1/2">
            <AppLabel htmlFor="cvc">CVC</AppLabel>
            <AppInput
              id="cvc"
              hasErrors={errors?.cvc}
              value={cvc}
              onChange={(e) => {
                setCvc(e.target.value)
              }}
              onBlur={validateCVC}
              placeholder="e.g. 123"
              minLength="3"
              maxLength="3"
            />
            {errors?.cvc && (
              <FormControlErrorMessage errorMessage={errors.cvc} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <AppButton
          title={isFormNotFilled ? "Please fill out the form correctly" : ""}
          disabled={formState == "processing" || isFormNotFilled}
          className={`${
            formState == "processing" ? "opacity-50 cursor-not-allowed" : ""
          } ${isFormNotFilled && "cursor-not-allowed bg-opacity-[0.95]"}`}
        >
          {formState == "processing" ? "Processing" : "Confirm"}
        </AppButton>
      </div>
    </form>
  )
}

export default CreditCardForm
