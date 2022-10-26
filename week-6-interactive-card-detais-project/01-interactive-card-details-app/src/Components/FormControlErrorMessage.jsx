import React from "react"

export const FormControlErrorMessage = ({ errorMessage = null, children }) => {
  return (
    <span className="inline-block text-sm mt-1 text-error">
      {children || errorMessage}
    </span>
  )
}
