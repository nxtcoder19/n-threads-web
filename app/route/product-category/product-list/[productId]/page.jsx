"use client"
import {ProductItemProvider} from "@/app/providers/product-provider";
import {ProductResource} from "@/app/route/product-category/product-list/component/product-resource";
import {ProductApiProvider} from "@/app/api/product-api-provider";
import {ProductDetailsResource} from "@/app/route/product-category/product-list/[productId]/component/product-details-resource";
import {ApiProvider} from "@/app/api/api-provider";

const ProductDetails = () => {
    return (
        <ApiProvider>
            <ProductItemProvider>
                <div>
                    <ProductDetailsResource/>
                </div>
            </ProductItemProvider>
        </ApiProvider>
    )
}

export default ProductDetails