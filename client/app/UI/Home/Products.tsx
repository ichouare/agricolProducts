
import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import axios from 'axios'

const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getProductsData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/products/', { withCredentials: true })
        console.log(data)
        setData(data)
      }
      catch (e) {
        console.log(e)
        // console.log(data)
      }
    }

    getProductsData()

  }, [])
  return (
    <div className='min-h-[336px] h-[336px] bg-white  p-16 gap-4 w-full flex flex-col items-center'>
      <h2 className='text-3xl font-bold tracking-wider'>Products</h2>
      <div className='w-full  min-h-[243px] flex items-start gap-8 flex-wrap  '>
        {data.map((product, index) => {

          return <ProductCart key={index} data={product} />
        }

        )}
      </div>
    </div>
  )
}

export default Products