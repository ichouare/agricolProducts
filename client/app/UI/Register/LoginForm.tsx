'use client'
import React, {useEffect, useRef} from "react";
import NextStepBtn from "./NextStepBtn";
import { useGlobalContext } from "./RegiterProvider";
import gsap from "gsap";


const RegisterForm = () => {
    const {step} = useGlobalContext()
    const LoginRef = useRef<HTMLFormElement>(null);
    useEffect(() => {
        if(LoginRef.current)
        {
            gsap.set(LoginRef.current, {
                
              opacity: step == 0 ? 0 : 1,
              x : step == 0 ? '-100%' : 0,
            })
    
        }
      }, [step]);
  return (
    <form className=" w-full h-[300px] max-h-[300px] grid grid-flow-row items-center  place-items-center px-6   absolute  opacity-0    " ref={LoginRef}>
      
      
      <div className="flex flex-col  w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-0"
          htmlFor="email"
        >
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-transparent border border-black   w-[100%] rounded-md p-1 text-heading_color uppercase"
          required
        />
      </div>
      <div className="flex flex-col  w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-0"
          htmlFor="password"
        >
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-transparent border border-black   w-[100%] rounded-md p-1 text-heading_color uppercase"
          required
        />
      </div>
    
        <NextStepBtn  value='login' />
        
       
    </form>
  );
};

export default RegisterForm;
