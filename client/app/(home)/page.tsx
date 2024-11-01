'use client'
import React from 'react'
import Banner from '../UI/Home/Banner'
import Products from '../UI/Home/Products'
import GrowinSection from '../UI/Home/GrowinSection'

const Home = () => {
  return (
    <section className='flex flex-col items-center gap-8'>
        <Banner />
        <Products/>
        <GrowinSection/>
    </section>
  )
}

export default Home