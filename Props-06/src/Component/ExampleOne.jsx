import React from 'react'

const ExampleOne = (props) => {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
    </div>
  )
}

export default ExampleOne