import React, { useState } from 'react'

const UpdatingArray = () => {
    const [friend, setfriend] = useState(["ramit", "Bijay"]);
    const AddOne = () => setfriend([...friend, "Khatri"]);
    const UpdateOne = () => setfriend(friend.map((name) => (name === 'ramit' ? 'saroj' : name)))

    const RemoveOne = () => setfriend(friend.filter((name) => (name !== "ramit")))

  return (
    <div>
        {friend.map((i, index) => (
           <ul key={index}>
            <li>{i}</li>
           </ul>
        ))}
        <button onClick={AddOne}>AddOne</button>
        <button onClick={UpdateOne}>UpdateOne</button>
        <button onClick={RemoveOne}>RemoveOne</button>
    </div>
  )
}

export default UpdatingArray