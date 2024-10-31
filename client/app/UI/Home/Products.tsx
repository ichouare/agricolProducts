import React from 'react'
import ProductCart from './ProductCart'

const Products = () => {
  return (
    <div className='min-h-[336px] h-[336px] bg-white  p-4 gap-4 w-full flex flex-col items-center'>
        <h2 className='text-3xl font-bold tracking-wider'>Products</h2>
        <div className='w-full bg-white'>
        <ProductCart />
        </div>
    </div>
  )
}

export default Products