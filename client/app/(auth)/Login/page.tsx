import RegisterForm from '@/app/UI/Register/RegisterForm'
import LoginForm from '@/app/UI/Register/LoginForm'
import StepsLogin from '@/app/UI/Register/StepsLogin'
import Image from '@/app/UI/Register/Image'
import React from 'react'

const Login = () => {
  return (
    <div className='w-full max-h-[800px]  h-full  grid grid-flow-row  grid-rows-[120px_1fr_200px] '>
        <StepsLogin/>
        <div className='w-full  flex relative'>
        <RegisterForm/>
        <LoginForm/>
        </div>
        <Image/>
    </div>
  )
}

export default Login