'use client'
import React , {useRef, useEffect, useState, FormHTMLAttributes} from "react";
import NextStepBtn from "./NextStepBtn";
import { useGlobalContext } from "./RegiterProvider";
import gsap from "gsap";

const RegisterForm = () => {
  const RegisterRef = useRef<HTMLFormElement>(null)
  const { step, setStep, setError } = useGlobalContext();

  useEffect(() => {
    if(RegisterRef.current)
    {
      gsap.to(RegisterRef.current , {
        opacity: step == 1 ? 0 : 1,
        x : step == 1 ? '-100%' : 0,
        duration: 0.4,
        ease: 'linear',

    })

    }
  }, [step]);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/auth/register/', {
        method: 'POST',
        credentials: 'include', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error response:', errorData);
        setError(errorData.username ||  errorData.email || errorData.password);
        return; // Exit the function if there's an error
      }
  
      const data = await response.json(); // Remove destructuring to avoid errors
      if(data)
        {
          setError('')
          setTimeout(() =>{ setStep(1)}, 1000)
        }
  
      e.currentTarget.reset();
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Fetch error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  return (
    <form className="w-full h-full grid grid-flow-row items-center  place-items-center px-6 opacity-100" ref={RegisterRef} onSubmit={handleSubmit}>
      <div className="flex flex-col   w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-none"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-transparent border border-black  w-[100%] rounded-md p-1"
          onChange={handleChange}
          value={formData.username}
          required
        />
      </div>
      <div className="flex flex-col  w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-0 lowercase"
          htmlFor="email"
        >
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-transparent border border-black   w-[100%] rounded-md p-1 text-heading_color"
          onChange={handleChange}
          value={formData.email}
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
          onChange={handleChange}
          value={formData.password}
          required
        />
      </div>
       <div className="text-sm flex gap-3 text-heading_color font-semibold">
        
        <input id="acceptTerms" name="acceptTerms" type="checkbox" className="rounded-lg border border-black"/>
        <label htmlFor="acceptTerms"> Please agree to the <span className="text-black"> terms of service.</span></label>
       </div>
        <NextStepBtn  value='register'/>
        
       
    </form>
  );
};

export default RegisterForm;
