import React, { useState } from 'react'

const UpdatingArrayOfObject = () => {
    const [movie, setmovie] = useState([
        {id: 1, name: "Extraction - 1", ratings: 22, },
        {id: 2, name: "Extraction -2", ratings: 24},
        {id: 3, name: "catch me if i fly", ratings: 30}
    ])
    const UpdateOne = () => setmovie(movie.map((item) => (item.id == 1 ? {...movie, name: "Extraction monster"} : item)))
  return (
    <div>
        {movie.map((i) => (
            <ul key={Math.random()}>
                <li>{i.id}</li>
                <li>{i.name}</li>
                <li>{i.ratings}</li>
            </ul>
        ))}
        <button onClick={UpdateOne}>UpdateOne</button>
    </div>
  )
}

export default UpdatingArrayOfObject