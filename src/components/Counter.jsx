import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState('hello');
  //const [counterClass, setCounterClass] = useState('text');
   
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    // checkColor();
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    // checkColor();
  }

  const handleYelling = () => {
    setGreet(`${greet.toUpperCase()} !!!!`)
  }

  // TO DO: with useEffect
  // const checkColor = () => {
  //   if (count <= 0) {
  //     console.log('Count', count)
  //     setCounterClass('red')
  //   } else if (count > 0 && count <= 5) {
  //     setCounterClass('orange')
  //   } else if (count > 5) {
  //     setCounterClass('green')
  //   }
  // }

  return (
    <div className="counter">
      <div>{count}</div>
      <button onClick={handleYelling}>Yell at me: {greet}</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
