import { createContext, useContext } from "react";
import {AuthApiProvider, useAuthApi} from "@/app/api/auth-api-provider";
import {ProductApiProvider, useProductApi} from "@/app/api/product-api-provider";
import {TodoApiProvider, useTodoApi} from "@/app/api/todo-api-provider";
import {CartApiProvider, useCartApi} from "@/app/api/cart-api-provider";
import {AddressApiProvider, useAddressApi} from "@/app/api/address-api-provider";


const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
    return (
        <AuthApiProvider>
            <ProductApiProvider>
                <TodoApiProvider>
                    <CartApiProvider>
                        <AddressApiProvider>
                            <ApiContextProvider>
                                {children}
                            </ApiContextProvider>
                        </AddressApiProvider>
                    </CartApiProvider>
                </TodoApiProvider>
            </ProductApiProvider>
        </AuthApiProvider>
    );
};

const ApiContextProvider = ({ children }) => {
    const authApi = useAuthApi();
    const productApi = useProductApi();
    const todoApi = useTodoApi();
    const cartApi = useCartApi();
    const addressApi = useAddressApi();

    return (
        <ApiContext.Provider value={{ authApi, productApi, todoApi, cartApi, addressApi }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => useContext(ApiContext);
