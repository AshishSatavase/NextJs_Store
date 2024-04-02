"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import {toast} from "react-hot-toast";
import { Currency } from "@/components/ui/currency";



const Summary=()=>{
    const removeAll=useCart((state)=>state.removeAll);
    const searchParams=useSearchParams();

    useEffect(()=>{
        if(searchParams.get("success")){
            toast.success("Payment Completed.");
            removeAll();
        }
        if(searchParams.get("canceled")){
            toast.error("Something went wrong")
        }
    },[searchParams,removeAll])
    const items=useCart((state)=>state.items);

    const totalprice=items.reduce((total,item)=>{
        return total+Number(item.price);
    },0)

    const onCheckout=async()=>{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productId:items.map((item)=>item.id)
        })
        window.location=response.data.url;
    }
    return(
        <div className=" mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:py-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900 ">Order Summary</h2>
            <div className="mt-6 space-y-4 ">
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalprice}/>
                </div>
            </div>
            <Button className="w-full mt-6" onClick={onCheckout}>
                Checkout
            </Button>
        </div>
    );
}

export default Summary;