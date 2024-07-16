import {createContext, useContext, useState} from "react";
import ProductCategoryDetailsData from "../model/product-category-data.json"
import ProductItemData from "../model/product-item.json"
import useSWR from "swr";
import {useProductApi} from "@/app/api/product-api-provider";
import {useParams} from "next/navigation";
import {useApi} from "@/app/api/api-provider";

/// Product category provider
const ProductCategoryContext = createContext({})

export const ProductCategoryProvider = ({children}) => {

    const {productApi} = useApi()
    const {listProductCategory} = productApi
    const {data, error, isLoading } = useSWR("/product-category/get",
        async () => {
            return listProductCategory()
        }
    )

    const [selectedProductCategoryId, setSelectedProductCategoryId] = useState(null);

    const productCategoriesId = data?.data?.map((pc) => {
        return pc.id;
    });

    const productCategoriesData = data?.data.reduce((acc, pc) => {
        acc[pc.id] = pc;
        return acc;
    }, {});

    return (
        <ProductCategoryContext.Provider
            value={
                {
                    data,
                    error,
                    isLoading,
                    productCategoriesId,
                    productCategoriesData,
                    selectedProductCategoryId,
                    setSelectedProductCategoryId,
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
    const {productApi} = useApi()
    const {listProduct} = productApi
    const params = useParams()


    const {data, error, isLoading } = useSWR(`/product/list/${params.productcategoryid}`,
        async () => {
            return await listProduct(params.productcategoryid)
        }
    )


    const products = data?.data?.map((product) => {
        return product.id;
    });

    const productData = data?.data.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {});
    return (
        <ProductItemContext.Provider
            value={
                {
                    data,
                    error,
                    isLoading,
                    products,
                    productData,
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