"use client";
import React, { useEffect, useRef } from "react";

import ProgressingStep from "./ProgressingStep";
import { useGlobalContext } from "./RegiterProvider";

const StepsLogin = () => {
  const { step, setStep } = useGlobalContext();
  const containerSteps = useRef<HTMLUListElement>(null);
  const steps = ["sing in", "Login"];
  useEffect(() => {
    if (containerSteps.current) {
      containerSteps.current.childNodes.forEach((node, index) => {
        console.log("step--------->", step, index);
        if (node instanceof HTMLElement) {
          if (index !== step) node.classList.add("text-heading_color");
          else {
            console.log("is changed", node);
            node.classList.remove("text-heading_color");
            node.classList.add("text-black");
          }
        }
      });
    }
  }, [step]);
  return (
    <div>
      <ul
        ref={containerSteps}
        className="grid grid-flow-col w-full  gap-2 items-center relative h-9"
      >
        {steps.map((step, index) => (
          <li
            className="h-full font-semibold cursor-pointer  capitalize leading-6  text-heading_color text-center  flex items-center justify-center text-2xl"
            key={index}
            onClick={() => setStep(prev => {
              if (prev == 1)
                return 0;
              return prev + 1;
            })}
          >
            {step}
          </li>
        ))}
      </ul>
      <ProgressingStep />
    </div>
  );
};

export default StepsLogin;
