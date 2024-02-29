"use client"
import {ProductItemProvider} from "@/app/providers/product-provider";
import {ProductResource} from "@/app/route/product-list/component/product-resource";
import {ProductApiProvider} from "@/app/api/product-api-provider";

const ProductList = () => {
    return (
        <ProductApiProvider>
            <ProductItemProvider>
                <div>
                    <ProductResource/>
                </div>
            </ProductItemProvider>
        </ProductApiProvider>
    )
}

export default ProductList