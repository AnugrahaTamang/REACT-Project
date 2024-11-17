import React from 'react'
import UserOne from './Component/UserOne'
import ExampleOne from './Component/ExampleOne'
import PropsDestructure from './Component/PropsDestructure'
import PropsChildren from './Component/PropsChildren'

const App = () => {
  return (
   <>
   <UserOne 
     img="https://yt3.googleusercontent.com/V4l2dAbDJt0reC0udbdHxTyit3Jr1wqA_xhpr_Do4W5yGi3kZK5rpk-VDHVSLPnX9TgAbL3a=s160-c-k-c0x00ffffff-no-rj"
     name="Anugraha Tmg"
     age={18}
     isMarried= "No"
     hobbies={["Coding", " Reading", " Sleeping"]}/>
     <ExampleOne name = "Ramit tmg" location = "Ktm" age = {22}/>
     <PropsDestructure name = "Jeewan Tmg" age = {23} location = "Dhading" />
     <PropsDestructure name = "BJ Tmg" age = {23} location = "Dhading" />
     <section>
     <PropsChildren>
      <h1>I am from h1 </h1>
      <h1>Hello h1 world</h1>
      </PropsChildren>
      <PropsChildren>
     <h2>I am from h2 </h2>
     <h2>Hello h2 world</h2>
      </PropsChildren>
      <PropsChildren>
     <h3>Hello I am from h3</h3>
     <h3>Hello h3 world </h3>
      </PropsChildren>
      </section>
       </>
  )
}

export default App