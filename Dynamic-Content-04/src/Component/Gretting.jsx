import React from 'react'

const Gretting = () => {
    const name = "John";
    let datenow = new Date();
    
    
  return (
    <div>
        <h1>My name is {name}</h1>
        <p>Date: {datenow.toLocaleTimeString()}</p>
    </div>
  )
}

export default Gretting