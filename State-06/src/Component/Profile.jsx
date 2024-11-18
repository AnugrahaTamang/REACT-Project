import React, { useState } from 'react'

const Profile = () => {
   const [profile, setprofile] = useState({
    name: "",
    age: "",
   })
   const handleChange = (e) => {
    const {name, value} = e.target;
    setprofile((preprofile) => ({...preprofile, [name]: value}))

   }

  return (
    <div>
        <label htmlFor="name">
            <input type="text" placeholder='Enter name' value={profile.name} onChange={handleChange} name='name'/>
        </label>
        <label htmlFor="age">
            <input type="number" name='age' value={profile.age} placeholder='Enter your age' onChange={handleChange}/>
        </label>
        <h1>Profile Information</h1>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </div>
  )
}

export default Profile