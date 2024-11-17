import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
      ];
  return (
    <>
    {products.map((item) => (
        <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.price}</li>
        </ul>
    ))}
    </>
  )
}

export default ProductList