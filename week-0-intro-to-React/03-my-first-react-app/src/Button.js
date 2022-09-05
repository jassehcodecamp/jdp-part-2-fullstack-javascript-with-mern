import React, {useState} from 'react'

const Button = () => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <button style={{padding: '12px 16px', backgroundColor: 'steelblue', color: '#fff' }} onClick={handleClick}>Clicked {counter}</button>
  )
}

export default Button