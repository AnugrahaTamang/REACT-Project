import React from 'react'

const UserOne = (props) => {
  return (
    <div>
        <img src={props.img} alt={props.name} />
        <h1>Name: {props.name}</h1>
        <h1>age: {props.age}</h1>
        <h1>isMarried: {props.isMarried}</h1>
        <h1>Hobbies: {props.hobbies}</h1>
    </div>
  )
}

export default UserOne
// Props in React 