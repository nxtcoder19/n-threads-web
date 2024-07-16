"use client"
import {CartItemResource} from "@/app/route/cart-items/component/cart-item-resource";
import {ApiProvider} from "@/app/api/api-provider";
import {CartItemProvider} from "@/app/providers/cart-item-provider";

const CartItems = () => {
    return (
        <ApiProvider>
            <CartItemProvider>
                <div>
                    <CartItemResource/>
                </div>
            </CartItemProvider>
        </ApiProvider>
    )
}

export default CartItems