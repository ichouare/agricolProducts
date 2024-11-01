"use client"
import React , {useEffect} from 'react'
import { redirect } from 'next/navigation'
import axios from 'axios';

const CheckSessionClient = () => {
    useEffect(() => {
        const getSession = async () => {
            try{
                console.log("dafhkjdsfsdak")
                const response  = await axios.get('http://localhost:8000/auth/check_session/', {  
                    withCredentials: true, 
                    })

                    const {data} =  response;
                    console.log(response.status)
                    if(response.status !== 200)
                    {
                        console.log("not authenticated")
                        redirect('/Login')
                    }
                }
                catch(e)
                {
                    redirect('/Login')
                    console.log(e)
            }
            }
        getSession()
    }, [])

  return (
    <></>
  )
}

export default CheckSessionClient