'use client'
import React , {useRef} from 'react'
import gsap from 'gsap'
import {useGlobalContext} from './RegiterProvider'

const ProgressingStep = () => {
    const progressBar = useRef(null)
    const {step, setStep} = useGlobalContext()

    React.useEffect(() => {
        gsap.to(progressBar.current , {
            x : step == 1 ? 230 : 20,
            duration: 0.4,
            ease: 'linear',

        })
    }, [step])

  return (
    <div className='w-full h-10 flex'>
        <div ref={progressBar} className='w-[28%] h-[6px] bg-heading_color rounded-md ms-6' />
      
    </div>
  )
}

export default ProgressingStep