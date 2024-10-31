import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='min-h-[453px] flex justify-center  text-[#F5F5F5]  p-16 bg-[#1B7A43] gap-6' >
        <div className='max-w-[60%] flex flex-col gap-4 items-start'>
                <h1 className='text-[40px] font-semibold  '>Discover Modern Agriculture and 
        Create a Greener Future</h1>
        <p className='font-normal text-lg max-w-[80%]'>
            Modern agriculture represents a paradigm shift in the way
    we approach food production.
        </p>
        <button className='btn !bg-white !w-fit !text-[#1B7A43] !text-2xl'>Discover Now</button>
        </div>
        <div className='w-[362px] h-[379px] rounded-2xl'>
            <Image src='/HumanBanner.png' width={400} height={400} alt='human_img'  className='w-full h-full object-fill  rounded-3xl' />
        </div>
        
    </div>
  )
}

export default Banner