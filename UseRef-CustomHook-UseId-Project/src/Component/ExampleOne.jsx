import React, { useRef } from 'react'

const ExampleOne = () => {
    const inputref = useRef(null);
    const focusInput = () => {
        if (inputref.current){
            inputref.current.focus();
        }
    }

  return (
    <div>
        <input type="text" ref={inputref} placeholder='Enter your data'/>
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default ExampleOne