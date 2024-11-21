import React from 'react'
import { useReducer } from 'react'

const ExampleOne = () => {
    const [data, setdata] = useReducer(ChangeOne, initialValue);
    const initialValue = {count: 10};
    const ChangeOne = (data, action) => {
        switch(action.type){
            case "increment":
                return{
                    ...data,
                    count: data.count +2,
                };
            case "decrement":
                return{
                    ...data,
                    count: data.count -2,
                };
            case "reset":
                return{
                    ...data,
                    count: 0
                };
            default:
               return data;
        }
    }
  return (
    <div>
        <button onClick={() => setdata({type: "increment"})}>+</button>
        <button onClick={() => setdata({type: "decrement"})}>-</button>
        <button onClick={() => setdata({type: "reset"})}>Reset</button>
        <p>Value of data : {data.count}</p>
    </div>
  )
}

export default ExampleOne