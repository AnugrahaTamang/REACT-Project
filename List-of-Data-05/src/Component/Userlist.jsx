import React from 'react'

const Userlist = () => {
    const users = [
        {id: 1, name: "Ramit", age: 22},
        {id: 2, name: "jeewan", age: 23},
        {
            id: 3, name: "Rajib", age: 24
        },
    ]
  return (
    <div>
      {users.map((item) => (
        <section key={item.id}>
                    <h1>Name: {item.name}</h1>
                    <h1>Age: {item.age}</h1>
        </section>
      ))}
    </div>
  )
}

export default Userlist