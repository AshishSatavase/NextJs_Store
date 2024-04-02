"use client";

import { Container } from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItems from "./components/cartItems";
import Summary from "./components/summary";

const CartPage=()=>{
    // const[isMounted,setIsMounted]=useState(false);
    // useEffect(()=>{
    //     setIsMounted(true);
    // },[]);

    // if(!isMounted){
    //     return null;
    // }
    const cart=useCart();
    return(
        <div className="bg-white ">
            <Container>
                <div className="px-4 py-16 sm:px-6 lg:px-8 ">
                    <h1 className="text-3xl font-bold text-black">Shopping cart</h1>
                    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start  gap-x-12">
                        <div className="lg:col-span-7">
                            {cart.items.length===0 &&<p className=" text-neutral-500"></p>}
                            {cart.items.map((item)=>(
                                <CartItems
                                key={item.id}
                                data={item}
                                />
                            ))}
                        </div>
                        <Summary/>
                    </div>
                </div>
            </Container>
            
        </div>
    )
};

export default CartPage;