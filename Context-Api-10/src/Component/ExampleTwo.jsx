import React from 'react'
import { useContext } from 'react'
import { data, data1, data2 } from '../App';


const ExampleTwo = () => {
    const Name = useContext(data);
    const Age = useContext(data1);
    const Location = useContext(data2);
  return (
    <div>
            <p>My name is {Name}. I am {Age} years old. I am from {Location}</p>
    </div>
  )
}

export default ExampleTwo