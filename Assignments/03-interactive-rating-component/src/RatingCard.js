import React, { useState } from "react"
import RatingFeedback from "./RatingFeedback"
import Rating from "./Rating"

const RatingCard = () => {
  const [rating, setRating] = useState("")
  const [status, setStatus] = useState("idle")

  return (
    <div className="card">
      {status === "idle" ? (
        <Rating rating={rating} setRating={setRating} setStatus={setStatus} />
      ) : (
        <RatingFeedback rating={rating} />
      )}
    </div>
  )
}

export default RatingCard
