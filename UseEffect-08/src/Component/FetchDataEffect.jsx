import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [data, setdata] = useState("");
    useEffect(() => {
        async function Myfun() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            if(data && data.length) setdata(data);
        }
        Myfun();
    })

  return (
    <div>
       <h1>Hello API call</h1>
       {data.map((valone) => (
        <ul key={valone.id}>
            <li>ID : {valone.userId}</li>
            <li> Title: {valone.title}</li>
        </ul>
       ))}
    
    </div>
  )
}

export default FetchDataEffect