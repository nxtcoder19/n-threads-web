import {createContext, useContext} from "react";
import {boxServer} from "@/app/common/common";

const ProductApiContext = createContext()
export const ProductApiProvider = ({children}) => {
    return (
        <ProductApiContext.Provider value={{

            createProduct: async (productData) =>  boxServer.post("/product/create",productData),

            updateProduct: async (updateProductData) => boxServer.put("/product/update", updateProductData),

            getProduct: async (id) => {
                if (id) {
                    return boxServer.get(`/product/get/${id}`)
                }
                return null
            },

            getProducts: async() => boxServer.get("/product/get"),

            deleteProduct: async (id) => {
                if (id) {
                    return boxServer.get(`/product/delete/${id}`)
                }
                return null
            },

        }}>
            {children}
        </ProductApiContext.Provider>
    )
}

export const useProductApi = () => {
    return useContext(ProductApiContext)
}