import React from 'react'

const Header = () => {
  return (
    <>
    <ul style={{display: "flex", flexDirection: 'row', gap: '20px'}}>
        <a href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">Course</a>
        <a href="#">About</a>
    </ul>
    </>
  )
}

export default Header