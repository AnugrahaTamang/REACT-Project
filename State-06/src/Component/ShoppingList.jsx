import React, { useState } from 'react'

const ShoppingList = () => {
    const [item, setitem] = useState([]);
    const [name, setname] = useState("");
    const [quantity, setquantity] = useState("");
    const handleSubmit  = (e) =>{
        e.preventDefault();
        if (!name || !quantity) return;
        const newitem = {
            name,
            quantity: parseInt(quantity),
        }
        setitem((pre) => [...pre, newitem]);
        setname("");
        setquantity("");
    }

  return (
    <div>
        <h1>Shopping List form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => (e.target.value)}  placeholder='Enter name'/>
            <input type="number" value={quantity} onChange={(e) => (e.target.value)}  placeholder='Enter age'/>
            <button type='submit'>submit</button>

        </form>
       {item.map((item, index) => (
        <li key={index}>Name: {item.name} -- quantity: {item.quantity}</li>
       ))}
    </div>
  )
}

export default ShoppingList