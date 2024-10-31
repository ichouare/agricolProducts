import React from 'react'
import RegiterProvider from '@/app/UI/Register/RegiterProvider';
import Navbar from '../UI/Home/Navbar';

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <section className='max-w-[420px] md:max-w-full lg:max-w-[1441px]   w-full min-h-screen    overflow-hidden '
        >
          <Navbar/>
            {children}
        </section>

    );
  }