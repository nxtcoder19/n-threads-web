import {createContext, useContext} from "react";
import ProductCategoryDetailsData from "../model/product-category-data.json"
import ProductItemData from "../model/product-item.json"
import useSWR from "swr";
import {useProductApi} from "@/app/api/product-api-provider";

/// Product category provider
const ProductCategoryContext = createContext({})

export const ProductProvider = ({children}) => {
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

/// Product item provider
const ProductItemContext = createContext({})

export const ProductItemProvider = ({children}) => {
    // const data = ProductItemData['product-items']
    const {getProducts} = useProductApi()
    const {data, error, isLoading } = useSWR("/product/get",
        async () => {
            return await getProducts()
        }
    )

    const products = data?.data?.map((product) => {
        return product.id;
    });

    const productData = data?.data.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {});
    console.log("aaa",productData)
    return (
        <ProductItemContext.Provider
            value={
                {
                    data,
                    isLoading,
                    products,
                    productData
                }
            }>
            {children}
        </ProductItemContext.Provider>
    )
}

export const ProductItemConsumer = ProductItemContext.Consumer;

export const useProductItem = () => {
    return useContext(ProductItemContext)
}