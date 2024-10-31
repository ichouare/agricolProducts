'use client'
import React from 'react'
import { GrLinkNext } from "react-icons/gr";

const NextStepBtn = ({value} : {value: string}) => {
  return (
    <div className=" w-full grid grid-flow-col gap-10  place-content-center bg-black   ">
    <button className="btn" type="submit">{value}</button>

</div>
  )
}

export default NextStepBtn