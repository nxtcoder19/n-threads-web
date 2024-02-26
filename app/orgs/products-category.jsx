import second, {ProductCategory} from '../molecule/product-category'
import {ProductCategoryConsumer, useProductCategory} from "@/app/providers/product-provider";


export const ProductsCategory = () => {

    // const categoryDetails = [
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(1).webp",
    //         "title": "category1"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(2).webp",
    //         "title": "category2"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(3).webp",
    //         "title": "category3"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(4).webp",
    //         "title": "category4"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(5).webp",
    //         "title": "category5"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(6).webp",
    //         "title": "category6"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(7).webp",
    //         "title": "category7"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(8).webp",
    //         "title": "category8"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(9).webp",
    //         "title": "category9"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(10).webp",
    //         "title": "category10"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(11).webp",
    //         "title": "category11"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(12).webp",
    //         "title": "category12"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(13).webp",
    //         "title": "category13"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(14).webp",
    //         "title": "category14"
    //     },
    //     {
    //         "img": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(15).webp",
    //         "title": "category15"
    //     },
    // ]
    const {data: productCategoryData} = useProductCategory()
    // console.log("ppp",productCategoryData)

    return (
        <div>
            <ProductCategory categoryDetails={productCategoryData}></ProductCategory>
        </div>
    )

    // return (
    //     <div>
    //         <ProductCategoryConsumer>
    //             {
    //                 ({data}) => {
    //                     return <ProductCategory categoryDetails={data}></ProductCategory>
    //                 }
    //             }
    //         </ProductCategoryConsumer>
    //     </div>
    // )
}