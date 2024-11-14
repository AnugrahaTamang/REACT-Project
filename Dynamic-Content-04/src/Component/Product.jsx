import React from 'react'

const Product = () => {
    const item = {
        name: "Laptop",
        price: 1200,
        availability: "In stock"
    }
  return (
    <div>
        <p>Product Name: {item.name}</p>
        <p>Product Price: {item.price}</p>
        <p>Product Availability: {item.availability}</p>
    </div>
  )
}

export default Product