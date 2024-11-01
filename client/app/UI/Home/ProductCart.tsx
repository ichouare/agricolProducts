"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Suspense } from "react";
import SkeletonCard from "./SkeletonCard";
import { PiStarThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import axios from 'axios'

type userId = [{ id: number }]




const ProductCart = ({ data }: {
  data: {
    id: number,
    image: string,
    name: string,
    note: string,
    chosestatus: string,
    user: [],
  }



}) => {
  const { id, image, name, note, chosestatus, user } = data;
  const recommendethisproduct = async () => {
    try{
      const res = await axios.put(`http://localhost:8000/products/note/${id}`, {}, {
        withCredentials: true
      })
      console.log(res)
      setpoint(prev => prev + 1)
    }
    catch(e){
      console.log(e)
    }
  }
  console.log(`http://localhost:800${image}`)
  const [started, setStarted] = useState(user.length ? true : false);
  const [point, setpoint] = useState(parseInt(note));
  console.log(name)
  return (
    <Suspense fallback={<SkeletonCard />}>
      <Card className=" relative w-[304px] max-w-[304px] max-h-[243px] flex flex-col items-center p-2">
        {!started ? <PiStarThin onClick={() => { 
            setStarted(true);
            recommendethisproduct();
         }} className="text-[#1B7A43] cursor-pointer absolute text-3xl self-end" /> : <FaStar className="text-yellow-400  cursor-pointer absolute text-3xl self-end" />}
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent className="max-h-[134px]">
          <Avatar className="w-[134px] h-[134px] bg-red-500 rounded-full">
            <AvatarImage src={`http://localhost:8000${image}`} className=" !h-full" alt={name} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
        <CardFooter>
          <p>{chosestatus === 'great' ? 'recommended' : point > 10 ? 'great' : "not_recommended"}</p>
        </CardFooter>
      </Card>
    </Suspense>
  );
};

export default ProductCart;
