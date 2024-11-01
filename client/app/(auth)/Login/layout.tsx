import React from 'react'
import RegiterProvider from '@/app/UI/Register/RegiterProvider';
export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <section className='max-w-[420px]  w-full min-h-screen grid grid-flow-row  grid-rows-[70px_1fr] place-items-center 3xl:p-6 overflow-hidden '
        >
            <h1 className='font-bold text-heading_color text-3xl capitalize max-h-[100px]'>Welcome</h1>
          <RegiterProvider>
            {children}
          </RegiterProvider>
        </section>

    );
  }