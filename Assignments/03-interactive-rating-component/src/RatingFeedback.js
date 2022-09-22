import React from "react"

import thankYouIcon from "./images/illustration-thank-you.svg"

function RatingFeedback({rating}) {
  return (
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
  )
}

export default RatingFeedback
