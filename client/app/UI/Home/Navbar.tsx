import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () => {
    const navlist = ['Home', 'products', 'blog', 'services']
  return (
    <nav className='bg-white w-full  h-[80px] max-h-[80px] flex items-center  justify-between px-6  cursor-pointer'>

        <div className='w-[80px] h-[80px] rounded-full'>
        <Image src='/logo.png' width={100} height={100} alt='logo' className='w-full h-full object-fill'/>
        </div>
        <ul className=' h-full flex items-center  gap-12 flex-1 justify-center font-medium text-xl'>
        {
            navlist.map((ele, index) => (
                <li key={index} >
                    <Link href={`/${ele.toLowerCase()}`}>{ele}</Link>
                </li>
            ))
        }
        </ul>
        <Avatar className='w-[36px] h-[36px] border p-1 bg-[#D2EACF]'>
        <AvatarImage src="person-outline.png"  />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </nav>
  )
}

export default Navbar