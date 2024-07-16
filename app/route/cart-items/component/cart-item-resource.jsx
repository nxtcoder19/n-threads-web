import {useCartItem} from "@/app/providers/cart-item-provider";
import {NavbarWithMegaMenu} from "@/app/orgs/navbar";
import {CartItems} from "@/app/orgs/cart-items";

export const CartItemResource = () => {

    const {cartItems, cartItemData, isLoading} = useCartItem()

    if (isLoading) return (
        <div>
            Loading...
        </div>
    )

    return (
        <div>
            <NavbarWithMegaMenu/>
            <div className="bg-gray-100 h-screen">
                <div className="mx-auto container py-4">
                    <CartItems cartItems={cartItems} cartItemData={cartItemData}/>
                </div>
            </div>
        </div>
    )
}