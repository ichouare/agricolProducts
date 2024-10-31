import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-[250px] w-[250px] rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
  )
}

export default SkeletonCard