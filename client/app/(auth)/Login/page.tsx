import RegisterForm from '@/app/UI/Register/RegisterForm'
import LoginForm from '@/app/UI/Register/LoginForm'
import StepsLogin from '@/app/UI/Register/StepsLogin'
import Image from '@/app/UI/Register/Image'
import React from 'react'
import Error from '@/app/UI/Register/Error'

const Login = () => {
  return (
    <div className='w-full 2xl:max-h-[800px]  h-full  grid grid-flow-row  grid-rows-[60px_30px_1fr_200px] gap-2 '>
        <StepsLogin/>
        <Error />
        <div className='w-full  flex relative '>
        <RegisterForm/>
        <LoginForm/>
        </div>
        <Image/>
    </div>
  )
}

export default Login