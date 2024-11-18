import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setcount] = useState(0);

  return (
    <>
    <p>Number: {count}</p>
    <button onClick={() => setcount(count +1)}>+</button>
    <button onClick={() => setcount(count -1)}>-</button>

    </>
  )
}

export default CounterApp