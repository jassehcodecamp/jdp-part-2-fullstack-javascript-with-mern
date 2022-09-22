import React, { useState } from "react"
import starIcon from "./images/icon-star.svg"
import thankYouIcon from "./images/illustration-thank-you.svg"

const RatingCard = () => {
  const [status, setStatus] = useState("idle")
  const [rating, setRating] = useState("")

  return (
    <div className="card">
      {status === "idle" ? (
        <div className="rating-container">
          <div className="star-icon-wrapper">
            <img src={starIcon} alt="Rating Star Icon" />
          </div>

          <h3>How did we do?</h3>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="buttons">
            <button
              onClick={() => setRating(1)}
              className={rating === 1 ? "active" : ""}
            >
              1
            </button>
            <button
              onClick={() => setRating(2)}
              className={rating === 2 ? "active" : ""}
            >
              2
            </button>
            <button
              onClick={() => setRating(3)}
              className={rating === 3 ? "active" : ""}
            >
              3
            </button>
            <button
              onClick={() => setRating(4)}
              className={rating === 4 ? "active" : ""}
            >
              4
            </button>
            <button
              onClick={() => setRating(5)}
              className={rating === 5 ? "active" : ""}
            >
              5
            </button>
          </div>

          <div className="submit-button-wrapper">
            <button className="submit" onClick={() => setStatus("submitted")}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="rating-feedback-container">
          <img src={thankYouIcon} alt="Thank you illustrator" />

          <div className="rating-result">
            You selected <span id="rating">{rating}</span> out of 5
          </div>

          <h3>Thank you!</h3>

          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  )
}

export default RatingCard
