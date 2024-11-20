import React from 'react'
import ComponentB from './Component/ComponentB';
const ComponentA = ({name}) => {
  return (
    <>
    <ComponentB name = {name}/>
    </>
  )
}

export default ComponentA