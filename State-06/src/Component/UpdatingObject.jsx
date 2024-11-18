import React, { useState } from 'react'

const UpdatingObject = () => {
    const [movie, setmovie] = useState({id: 1, name: "jari", ratings: 22})
    const UpdateOne = () => setmovie({...movie, name: "kabadi"})
  return (
    <div>
        <p>Id: {movie.id}</p>

        <p>Name: {movie.name}</p>
        <p>Ratings: {movie.ratings}</p>
        <button onClick={UpdateOne}>UpdateOne</button>
    </div>
  )
}

export default UpdatingObject