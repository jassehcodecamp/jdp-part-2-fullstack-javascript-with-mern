import React from "react"
import { useNavigate } from "react-router-dom"
import ArrowIcon from "./ArrowIcon"

const BackButton = () => {
  const navigate = useNavigate()
  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <ArrowIcon style={{ marginRight: "9px", width: "20px" }} />
      Back{" "}
    </button>
  )
}

export default BackButton
