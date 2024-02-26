import {createContext, useContext} from "react";
import ProductCategoryDetailsData from "../model/product-category-data.json"

const ProductCategoryContext = createContext({})

export const ProductCategoryProvider = ({children}) => {
    const data = ProductCategoryDetailsData['category-details']
    // console.log("aaa",data)
    return (
        <ProductCategoryContext.Provider
            value={
                {
                data
                }
            }>
            {children}
        </ProductCategoryContext.Provider>
    )
}

export const ProductCategoryConsumer = ProductCategoryContext.Consumer;

export const useProductCategory = () => {
    return useContext(ProductCategoryContext)
}