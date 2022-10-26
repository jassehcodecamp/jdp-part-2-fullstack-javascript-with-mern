import { useState } from "react"
import AppAside from "./Components/AppAside"
import AppMain from "./Components/AppMain"
function App() {
  const [cardholderName, setCardholderName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvc, setCvc] = useState("")

  const resetCardDetails = () => {
    setCardholderName("")
    setCardNumber("")
    setExpiryMonth("")
    setExpiryYear("")
    setCvc("")
  }
  return (
    <div className="min-h-screen flex flex-col md:flex-row text-lg">
      <AppAside
        cardDetails={{
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
        }}
      />
      <AppMain
        cardDetails={{
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
        }}
        resetCardDetails={resetCardDetails}
      />
    </div>
  )
}

export default App
