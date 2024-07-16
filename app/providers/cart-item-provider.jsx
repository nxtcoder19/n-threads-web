import {createContext, useContext} from "react";
import {useApi} from "@/app/api/api-provider";
import useSWR from "swr";

const CartItemContext = createContext({})

export const CartItemProvider = ({children}) => {

    const {cartApi} = useApi()
    const {listCartItems} = cartApi
    const {data, error, isLoading } = useSWR("/cart/list",
        async () => {
            return await listCartItems()
        }
    )

    const cartItems = data?.data?.map((cartItem) => {
        return cartItem.id;
    })

    const cartItemData = data?.data.reduce((acc, cartItem) => {
        acc[cartItem.id] = cartItem;
        return acc;
    }, {});

    return (
        <CartItemContext.Provider
            value={
                {
                    data,
                    error,
                    isLoading,
                    cartItems,
                    cartItemData,
                }
            }>
            {children}
        </CartItemContext.Provider>
    )
}

export const CartItemConsumer = CartItemContext.Consumer;

export const useCartItem = () => {
    return useContext(CartItemContext)
}