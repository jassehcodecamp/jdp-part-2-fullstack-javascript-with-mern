import React, { useState } from "react"
import "./TipCalculator.css"
import logo from "./images/logo.svg"
import personIcon from "./images/icon-person.svg"

function App() {
  const [bill, setBill] = useState("")
  const [tipPercent, setTipPercent] = useState(0)
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [isCustomTip, setIsCustomTip] = useState(false)

  let tipAmount = 0
  let tipAmountPerPerson = 0
  let totalPerPerson = 0

  if (bill) {
    tipAmount = (tipPercent / 100) * bill
  }

  if (numberOfPeople) {
    tipAmountPerPerson = tipAmount / numberOfPeople
  }
  if (bill && numberOfPeople) {
    totalPerPerson = (Number(bill) + tipAmount) / numberOfPeople
  }
  const setTipPercentHandler = (event) => {
    setIsCustomTip(false)
    setTipPercent(Number(event.target.value))
  }

  return (
    <div className="App">
      <main>
        <div>
          <img src={logo} alt="Tip Calculator Logo" />
        </div>

        <div className="calculator-container">
          <div className="calculator">
            <form action="" id="tip-calculator">
              <div className="form-group">
                <label htmlFor="bill">Bill</label>
                <div className="input-group">
                  <span className="input-addon">
                    <span className="currency">D</span>
                  </span>
                  <input
                    type="text"
                    name="bill"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="0"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tip">Select Tip %</label>
                <div className="tip-percent-buttons">
                  <button
                    type="button"
                    value="5"
                    onClick={setTipPercentHandler}
                    className={tipPercent === 5 && "active-button"}
                  >
                    5%
                  </button>
                  <button
                    type="button"
                    value="10"
                    onClick={setTipPercentHandler}
                    className={tipPercent === 10 && "active-button"}
                  >
                    10%
                  </button>
                  <button
                    type="button"
                    value="15"
                    onClick={setTipPercentHandler}
                    className={tipPercent === 15 && "active-button"}
                  >
                    15%
                  </button>
                  <button
                    type="button"
                    value="25"
                    onClick={setTipPercentHandler}
                    className={tipPercent === 25 ? "active-button" : ""}
                  >
                    25%
                  </button>
                  <button
                    type="button"
                    value="50"
                    className={tipPercent === 50 ? "active-button" : ""}
                    onClick={setTipPercentHandler}
                  >
                    50%
                  </button>
                  {!isCustomTip ? (
                    <button
                      type="button"
                      name="custom"
                      className="custom"
                      onClick={() => {
                        setTipPercent("")
                        setIsCustomTip(true)
                      }}
                    >
                      Custom
                    </button>
                  ) : (
                    <input
                      value={tipPercent}
                      onChange={(e) => setTipPercent(e.target.value)}
                      type="text"
                      name="custom-tip"
                      className="custom-tip"
                      placeholder="0"
                      autoComplete="off"
                    />
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="number-of-people">Number Of People</label>
                <div className="input-group">
                  <span className="input-addon">
                    <img src={personIcon} alt="Person Icon" />
                  </span>
                  <input
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    type="text"
                    name="number-of-people"
                    placeholder="0"
                    autoComplete="off"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="tip-result">
            <div className="tip-result-row">
              <div>
                <span className="tip-result-label">Tip Amount</span>
                <span>/ person</span>
              </div>
              <div>D{Number(tipAmountPerPerson).toFixed(2)}</div>
            </div>

            <div className="tip-result-row">
              <div>
                <span className="tip-result-label">Total</span>
                <span>/ person</span>
              </div>

              <div>D{Number(totalPerPerson).toFixed(2)}</div>
            </div>

            <button type="reset" form="tip-calculator">
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
