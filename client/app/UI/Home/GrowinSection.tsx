import React from 'react'
import Image from 'next/image'

const GrowinSection = () => {
  return (
    <div className='min-h-[453px] flex justify-between  text-[#F5F5F5]  py-16 px-12  gap-6' >
        <div className='max-w-[55%] flex flex-col gap-4 items-start  '>
                <h1 className='text-[40px] font-semibold  text-[#000000]'>Growing Your Vibrant Vegetables,
                in your Own Garden </h1>
        <p className='font-normal text-lg max-w-[80%] text-[#3C3838]'>
        Growing vegetables in your own garden can be a rewarding and fulfilling
experience.Not only does it provide you with fresh and nutritious produce,
but it also allows you to connect with nature and enjoy the satisfaction 
of watching your plants thrive.
        </p>
        <button className='btn !bg-white !w-fit !text-[#1B7A43] border !border-[#1B7A43] !text-2xl'> learn more</button>
        </div>
        <div className='w-[362px] h-[379px] rounded-lg border border-[#1B7A43]'>
            <Image src='/HumerGrow.png' width={400} height={400} alt='human_img'  className='w-full h-full object-fill  rounded-lg mt-4 ms-4' />
        </div>
        
    </div>
  )
}

export default GrowinSection