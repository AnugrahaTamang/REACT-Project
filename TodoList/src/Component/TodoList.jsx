import React, { useState } from 'react'
import "../Component/style.css"
const TodoList = () => {
  const [data, setdata] = useState([]);
  const [inputvalue, setinputvalue] = useState('');
  const generatedId = () => Math.floor(Math.random() *10);
  const handlesubmit = () =>{
    setdata((data) => (
      data.concat({
        text: inputvalue,
        id: generatedId(),
      })
    ))
  }
  const removeTodo = (id) =>{
    setdata((data) => data.filter((t) => t.id !== id));
  }
  return (
    <div>
      <input type="text" placeholder='Enter your Todo' value={inputvalue} onChange={(e) => setinputvalue(e.target.value)}/>
      <button onClick={handlesubmit}>submit</button>
      {data.map(({text, id}) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={() => removeTodo(id)}>x</button>
        </li>
      
      ))}
    </div>
  )
}

export default TodoList