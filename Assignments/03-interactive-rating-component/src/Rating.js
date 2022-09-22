import React from "react"
import Button from "./Button"
import starIcon from "./images/icon-star.svg"

const BUTTONS = [1, 2, 3, 4, 5]

function Rating({ rating, setRating, setStatus }) {
  const handleSetRating = (event) => {
    setRating(Number(event.target.innerText))
  }

  return (
    <div className="rating-container">
      <div className="star-icon-wrapper">
        <img src={starIcon} alt="Rating Star Icon" />
      </div>

      <h3>How did we do?</h3>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="buttons">
        {BUTTONS.map((button) => (
          <Button
            key={button}
            onClick={handleSetRating}
            className={rating === button ? "active" : ""}
            children={button}
          />
        ))}
      </div>

      <div className="submit-button-wrapper">
        <Button
          className="submit"
          onClick={() => setStatus("submitted")}
          children="Submit"
        />
      </div>
    </div>
  )
}

export default Rating