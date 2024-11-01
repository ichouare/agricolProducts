"use client";
import React, { useEffect, useRef, useState } from "react";
import NextStepBtn from "./NextStepBtn";
import { useGlobalContext } from "./RegiterProvider";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { step } = useGlobalContext();
  const LoginRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (LoginRef.current) {
      gsap.set(LoginRef.current, {
        opacity: step == 0 ? 0 : 1,
        x: step == 0 ? "-100%" : 0,
      });
    }
  }, [step]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/login/", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Error response:", errorData);
        // setError();
        return; // Exit the function if there's an error
      }

      // Remove destructuring to avoid errors
      setTimeout(() => {
        router.push('/')
      }, 1000)
      e.currentTarget.reset();
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className=" w-full h-[300px] max-h-[300px] grid grid-flow-row items-center  place-items-center px-6   absolute  opacity-0  "
      ref={LoginRef}
      onSubmit={handleSubmit}
    >
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
          className="bg-transparent border border-black   w-[100%] rounded-md p-1 text-heading_color "
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
          className="bg-transparent border border-black   w-[100%] rounded-md p-1 text-heading_color "
          required
          onChange={handleChange}
          value={formData.password}
        />
      </div>

      <NextStepBtn value="login" />
    </form>
  );
};

export default RegisterForm;
