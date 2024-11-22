import React, { useEffect, useRef, useState } from 'react'

const ExampleTwo = () => {
    const [count, setcount] = useState(0);
    const valueref = useRef(null);
    useEffect(() => {
        valueref.current = setInterval(() => {
            setcount((prevcount) => prevcount +1);
        }, 1000);
        return () => {
            clearInterval(valueref.current);
        };
    }, []);
    
  return (
    <div>
        <p>Timer : {count} seconds</p>
        <button onClick={() => clearInterval(valueref.current)}>stop timer</button>
    </div>
  )
}

export default ExampleTwo