import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams();

  return (
    <div className='product-detail'>
        <h1>Product Detail</h1>
        <p>Product id is {id}.</p>
    </div>
  )
}

export default ProductDetail