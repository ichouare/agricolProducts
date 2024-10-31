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



const ProductCart = () => {
  return (
    <Suspense fallback={<SkeletonCard/>}>
    <Card className=" max-w-[304px] max-h-[243px] flex flex-col items-center p-2">
        <PiStarThin className="text-[#1B7A43] cursor-pointer fixed text-3xl self-end" />
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[134px]">
        <Avatar  className="w-[134px] h-[134px] bg-red-500 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" className=" !h-full" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardContent>
      <CardFooter>
        <p>status</p>
      </CardFooter>
    </Card>
    </Suspense>
  );
};

export default ProductCart;
