import React, { useEffect, useState } from 'react'

const ExampleOne = () => {
    const [value, setvalue] = useState(0);
   useEffect(() => {
    console.log("Hello sagar sir");
    document.title = `Increment ${value}`
   })
  return (
    <div>
        <h1>Value of {value}</h1>
        <button onClick={() => setvalue(value+1)}>Increment</button>
    </div>
  )
}

export default ExampleOne