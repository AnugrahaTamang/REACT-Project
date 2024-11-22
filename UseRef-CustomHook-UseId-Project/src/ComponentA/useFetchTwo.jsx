import React from 'react'
import UseFetchOne from './UseFetchOne'
const useFetchTwo = () => {
    const [data] = UseFetchOne("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
        {data && data.map((item) => (
            <ul key={item.id}>
                <li>{item.title}</li>
            </ul>
        ))}
    </div>
  )
}

export default useFetchTwo