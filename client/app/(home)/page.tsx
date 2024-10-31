import React from 'react'
import Banner from '../UI/Home/Banner'
import Products from '../UI/Home/Products'

const Home = () => {
  return (
    <section className='flex flex-col items-center'>
        <Banner />
        <Products/>
    </section>
  )
}

export default Home