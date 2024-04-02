"use client";
import { formatter } from "@/lib/utils"
import { useEffect, useState } from "react"


interface CurrencyProps{
    value:string |Number
}
export const Currency:React.FC<CurrencyProps>=({
    value
})=>{
    const [isMounted,setIsMounted]=useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null;
    }

    // the above mechanism is to prevent hydration
    return(
        <div>
            {formatter.format(Number(value))}
        </div>
    )
}