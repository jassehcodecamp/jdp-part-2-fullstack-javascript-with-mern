import AppInput from "./Components/AppInput"
import AppLabel from "./Components/AppLabel"

function App() {
  return (
    <div className="min-h-screen flex text-lg">
      <aside className="w-96 bg-purple-500"></aside>
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          <form action="#" className="space-y-8">
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

            <div>
              <button className="py-5 px-2 leading-5 w-full bg-primary text-white font-semibold rounded-xl">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
