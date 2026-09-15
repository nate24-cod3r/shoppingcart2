import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products, addToCart}
) => {
  return (
      <div className='product-list'>
        {
          products.map((product)=> (
            <ProductCard product = {product} addToCart={addToCart}/>
          ))
        }
      </div>   
  )
}

export default ProductList
