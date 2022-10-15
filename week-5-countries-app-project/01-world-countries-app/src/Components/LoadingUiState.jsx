import React from "react"
import LoadingSpinner from "./LoadingSpinner"

const LoadingUiState = () => {
  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingSpinner width="120px" height="120px" />
    </div>
  )
}

export default LoadingUiState
