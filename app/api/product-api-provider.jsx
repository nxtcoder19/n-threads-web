import {createContext, useContext} from "react";
import {boxServer} from "@/app/common/common";

const ProductApiContext = createContext({})
export const ProductApiProvider = ({children}) => {
    return (
        <ProductApiContext.Provider value={{
            /// Product
            createProduct: async (productData) =>  boxServer.post("/product/create",productData),

            updateProduct: async (updateProductData) => boxServer.put("/product/update", updateProductData),

            getProduct: async (id) => {
                if (id) {
                    return boxServer.get(`/product/get/${id}`)
                }
                return null
            },

            listProduct: async(productCategoryId) => {
                console.log("there", productCategoryId)
                if (productCategoryId) {
                    console.log("there222")
                    return boxServer.get(`/product/list/${productCategoryId}`)
                }
                return null
            },

            deleteProduct: async (id) => {
                if (id) {
                    return boxServer.get(`/product/delete/${id}`)
                }
                return null
            },

            /// Product category
            createProductCategory: async (productCategoryData) =>  boxServer.post("/product-category/create",productCategoryData),

            updateProductCategory: async (updateProductData) => boxServer.put("/product-category/update", updateProductData),

            getProductCategory: async (id) => {
                if (id) {
                    return boxServer.get(`/product-category/get/${id}`)
                }
                return null
            },

            listProductCategory: async() => {
                return boxServer.get("/product-category/get")
            },

            deleteProductCategory: async (id) => {
                if (id) {
                    return boxServer.get(`/product-category/delete/${id}`)
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