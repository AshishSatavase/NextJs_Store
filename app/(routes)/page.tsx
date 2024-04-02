import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import { BillBoard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

export const revalidate=0; // so its not cached accidentally
const HomePage=async ()=>{
    const products=await getProducts({isFeatured:true})
    const billboard=await getBillboard('f925b062-e703-499d-82e9-649561dda323');
    return(
       <Container>
        <div className="space-y-10 pb-10">
            <BillBoard data={billboard}/>

        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="FeaturedProducts" items={products}/>
        </div>
       </Container>
    )
}
export default HomePage;