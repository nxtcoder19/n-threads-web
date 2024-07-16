"use client"
import {useParams} from "next/navigation";
import ProductList from "@/app/route/product-category/product-list/page";
import {ApiProvider} from "@/app/api/api-provider";

const ProductCategoryId = () => {

    return (
        <div>
            <ApiProvider>
                <ProductList/>
            </ApiProvider>
        </div>
    )
}

export default ProductCategoryId