import React from 'react'
import "./index.css"
import { useState } from 'react'

const Testimonials = () => {
    const [currentIndex, setcurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "Life is beautiful gift from God",
            author: "Jonathan",
        },
        {
            quote: "Start your day with love and respect",
            author: "Jeewan Tamang",
        },
        {
            quote: "Experience is better than expectation",
            author: "Anugraha Gomja",
        },
    ]
    const prevOne = () =>{
        setcurrentIndex((currentIndex + testimonials.length -1) % testimonials.length);
    }
    const nextOne = () =>{
        setcurrentIndex((currentIndex + 1) % testimonials.length);
    }
  return (
    <div className='testimonials'>
        <div className='testimonials-quote'>
            {testimonials[currentIndex].quote}
        </div>
        <div className='testimonials-author'>
            - {testimonials[currentIndex].author}
        </div>
        <div className='btn'>
            <button onClick={prevOne}>Pre</button>
            <button onClick={nextOne}>Next</button>
        </div>
 
    </div>
  )
}

export default Testimonials