import React, { useRef } from 'react'

const ExampleOfUseRef = () => {
    const inputelement = useRef(null);
    const focusInput = () => {
        inputelement.current.focus();
        inputelement.current.value= "Anugraha Tamang";
    }
  return (
    <div>
        <input type="text" ref={inputelement}/>
        <button onClick={() => focusInput()}>Focus & write</button>
    </div>
  )
}

export default ExampleOfUseRef