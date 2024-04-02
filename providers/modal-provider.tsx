"use client";

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";


const ModalProvider=()=>{
    const [mounted,isMounetd]=useState(false);
    useEffect(()=>{
        isMounetd(true);        
    },[]);

    if(!mounted){
        return null;
    }
    return(
        <div>
                <PreviewModal/>
        </div>
    );
}

export default ModalProvider;