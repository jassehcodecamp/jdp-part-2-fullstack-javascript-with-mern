import React from "react"
import Button from "./Button"
import starIcon from "./images/icon-star.svg"

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
        <Button
          onClick={handleSetRating}
          className={rating === 1 ? "active" : ""}
          children={1}
        />

        <Button
          onClick={handleSetRating}
          className={rating === 2 ? "active" : ""}
          children={2}
        />

        <Button
          onClick={handleSetRating}
          className={rating === 3 ? "active" : ""}
          children={3}
        />

        <Button
          onClick={handleSetRating}
          className={rating === 4 ? "active" : ""}
          children={4}
        />

        <Button
          onClick={handleSetRating}
          className={rating === 5 ? "active" : ""}
          children={5}
        />
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
