"use client"
import {ProductItemProvider} from "@/app/providers/product-provider";
import {ProductResource} from "@/app/route/product-category/product-list/component/product-resource";
import {ProductApiProvider} from "@/app/api/product-api-provider";
import {ApiProvider} from "@/app/api/api-provider";

const ProductList = () => {
    return (
            <ProductItemProvider>
                <div>
                    <ProductResource/>
                </div>
            </ProductItemProvider>
    )
}

export default ProductList