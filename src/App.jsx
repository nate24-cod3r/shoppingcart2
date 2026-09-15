import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'


function App() {

  const [cart, setCart] = useState([])
  
  const products = [
    {
      id: 1,
      name: "Mouse",
      price: 150,
      image: "data:image/webp;base64,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"
    },
    {
      id: 2,
      name: "Laptop",
      price: 1500,
      image: "https://th.bing.com/th/id/OIP.7Pzbri4cZQ7a1WKAiHVoxQHaEK?w=314&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
      id: 3,
      name: "camera",
      price: 900,
      image: "https://petapixel.com/assets/uploads/2024/10/Product-shots-black-background_X-M5_15.jpg"
    },
    {
      id: 4,
      name: "Headphones",
      price: 300,
      image: "https://www.bing.com/th?id=OPHS.uxEuJAkL0WG7ng474C474&o=5&pid=21.1&w=128&h=188&qlt=100&dpr=1.3&bw=6&bc=FFFFFF"
    }
  ]

  function addToCart(product){
    setCart([
      ...cart, product
    ])
  }
  return (
    <div className='container'>
      <h1>My Store</h1>
      <ProductList products={products} addToCart={addToCart} />
      
      <h2>Cart</h2>
      <p>Total Items: {cart.length}</p>
      
      {
        cart.map((item, index) => (
          <div key={index}>
             <p>{item.name}</p>
             <p>${item.price}</p>
          </div>
       )
      )
      }
    
    </div>
  )
}

export default App
