import React from 'react'
import RegiterProvider from '@/app/UI/Register/RegiterProvider';
import Navbar from '../UI/Home/Navbar';
import { redirect } from 'next/navigation';

export default async function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const response  = await fetch('http://localhost:8000/auth/check_session/', {
    method: 'GET',   
    credentials: 'include', 
    })
    const data = await response.json();
    // if(response.status !== 200)
    //     redirect('/Login')
    return (
        <section className='max-w-[420px] md:max-w-full lg:max-w-[1441px]   w-full min-h-screen    overflow-hidden '
        >
          <Navbar/>
            {children}
        </section>

    );
  }