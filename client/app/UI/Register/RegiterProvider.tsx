'use client'
import React, {createContext, useContext, useState} from 'react'
 type typeContextProps = {
    step : number,
    setStep : React.Dispatch<React.SetStateAction<number>>,
    error : string,
    setError : React.Dispatch<React.SetStateAction<string>>,  // add other state properties as needed
 }

 const Context = createContext<typeContextProps | null>(null);

const RegiterProvider = ({children} : {children : React.ReactNode}) => {
    
    const [step, setStep] = useState(0)
    const [error, setError] = useState('')
    return (
    <Context.Provider value={{
        step,
        setStep,
        error,
        setError,  // add other state properties as needed
    }}>
   {children}
    </Context.Provider>
  )
}
 

export const useGlobalContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error('useGlobalContext must be used within a RegisterProvider');
    }
    return context;
  };

export default RegiterProvider