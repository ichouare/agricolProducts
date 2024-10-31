'use client'
import React from 'react'
import { useGlobalContext } from './RegiterProvider'

const Error = () => {
    const { error } = useGlobalContext()
  return (
    <div className='w-full  max-h-6 grid place-content-center'><p className='text-red-500'>{error}</p></div>
  )
}

export default Error