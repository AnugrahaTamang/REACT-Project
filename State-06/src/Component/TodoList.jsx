import React, { useState } from 'react'

const TodoList = () => {
    const [todos, settodoes] = useState([]);
    const [inputvalue, setinputvalue] = useState("");
    const handleSubmit = (e) => {
              e.preventDefault();
        if (inputvalue.trim()){
            settodoes([...todos, inputvalue]);
            setinputvalue('');
        }
    };
    const handleChange = (e) => {
        setinputvalue(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputvalue} onChange={handleChange} placeholder='Add item' />
            <button type='submit'>Submit</button>
        </form>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList