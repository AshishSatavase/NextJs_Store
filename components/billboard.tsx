import { Billboard as BillBoardType } from "@/types"


interface BillBoardProps{
    data:BillBoardType
}
export const BillBoard:React.FC<BillBoardProps>=({data})=>{
    return(
        <div className="p-4 sm:p-6 lg:p-8 rounded-x1 overflow-hidden ">
            <div 
            style={{backgroundImage:`url(${data?.imageUrl})`}}
            className="rounded-xl relative aspect-square md:aspect-[3.2/1] overflow-hidden"            
            >
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>

            </div>

        </div>
    )
}