import React from "react"

const AppFormGroup = () => {
  return (
    <div>
      <AppLabel htmlFor="cardholder-name">Cardholder Name</AppLabel>
      <AppInput id="cardholder-name" placeholder="e.g: Buba Conteh" />
    </div>
  )
}

export default AppFormGroup
