import {createContext, useContext} from "react";
import {boxServer} from "@/app/common/common";

const CartApiContext = createContext({})
export const CartApiProvider = ({children}) => {
    return (
        <CartApiContext.Provider value={{
            /// Cart
            addToCart: async (cartData) =>  boxServer.post("/cart/create",cartData),

            updateCart: async (id,updateCartData) => {
                if (id) {
                    return boxServer.put(`/cart/update/${id}`, updateCartData)
                }
                return null
            },

            listCartItems: async() => {
                return boxServer.get("/cart/list")
            },

            deleteCart: async (id) => {
                if (id) {
                    return boxServer.get(`/cart/delete/${id}`)
                }
                return null
            },
        }}>
            {children}
        </CartApiContext.Provider>
    )
}

export const useCartApi = () => {
    return useContext(CartApiContext)
}