"use client"
import {ProductItemProvider} from "@/app/providers/product-provider";
import {ProductResource} from "@/app/route/product-list/component/product-resource";
import {ProductApiProvider} from "@/app/api/product-api-provider";
import {ProductDetailsResource} from "@/app/route/product-list/[productId]/component/product-details-resource";

const ProductDetails = () => {
    return (
        <ProductApiProvider>
            <ProductItemProvider>
                <div>
                    <ProductDetailsResource/>
                </div>
            </ProductItemProvider>
        </ProductApiProvider>
    )
}

export default ProductDetails