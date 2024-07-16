import {useProductApi} from "@/app/api/product-api-provider";
import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {Header} from "@/app/orgs/header";
import {Navbar} from "@material-tailwind/react";
import {NavbarWithMegaMenu} from "@/app/orgs/navbar";
import {Button} from "@/components/ui/button";
import {AvailableOfferComponent} from "@/app/molecule/available-offer-component";
import {RatingComponent, ReviewComponent} from "@/app/orgs/review-component";
import {useApi} from "@/app/api/api-provider";
import {QuestionsAnswers} from "@/app/molecule/questions-answers";
import {ConfirmButton} from "@/app/atoms/button";
import {Footer} from "@/app/orgs/footter";

export const ProductDetailsResource = () => {
    const   {productApi, cartApi} = useApi()
    console.log("cartApi",cartApi)
    const {getProduct} = productApi
    const {addToCart} = cartApi
    const params = useParams()
    const [product, setProduct] = useState({})
    const [image, setImage] = useState({})
    const [isAddToCart, setIsAddToCart] = useState(() => {
        const savedCartState = localStorage.getItem(`cartState-${params.productId}`);
        return savedCartState ? JSON.parse(savedCartState) : false;
    })

    const [amount, setAmount] = useState(1);
    const productDetails = async () => {
        try {
            const response = await getProduct(params.productId)
            setProduct(response.data)
            setImage(response.data.extraImages[0])
        } catch (e) {
            console.log(e)
        }
    }

    const addProductToCart = async (productData) => {
        try {
            const cartData = {
                product: productData,
                quantity: 1
            }
            // console.log("productData",cartData)
            const response = await addToCart(JSON.stringify(cartData))
            console.log(response)
            setIsAddToCart(true)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        productDetails()
    }, [params.productId])

    useEffect(() => {
        const savedCartState = localStorage.getItem(`cartState-${params.productId}`)
        console.log("save cart state",savedCartState)
        if (savedCartState) {
            setIsAddToCart(JSON.parse(savedCartState))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(`cartState-${params.productId}`, JSON.stringify(isAddToCart));
    }, [isAddToCart, params.productId]);

    return (
        <div>
            {/*<Header/>*/}
            <NavbarWithMegaMenu/>
            <div className='container mx-auto py-4 flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                <div className='flex flex-col lg:items-start lg:justify-start gap-6 lg:w-1/3 lg:sticky lg:top-48'>
                    <img src={image} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                    <div className='flex flex-row justify-between gap-2 h-24'>
                        {
                            product.extraImages?.map((image) => {
                                return (
                                    <img
                                        key={image}
                                        src={image} alt="" className='w-24 h-24 rounded-md cursor-pointer'
                                        onClick={() => setImage(image)}/>
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Button size={"lg"} className={"bg-blue-500 hover:bg-blue-700"} variant="default">Buy Now</Button>
                        <Button onClick={() => {
                            // setIsAddToCart(true)
                            isAddToCart ? null :addProductToCart(product)
                        }} size={"lg"} variant="outline">{isAddToCart ? "Go to Cart" : "Add to Cart"}</Button>
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:w-2/3 lg:h-screen lg:overflow-y-scroll'>
                    <div>
                        <span className=' text-violet-600 font-semibold'>{product.name}</span>
                        <h1 className='text-3xl font-bold'>{product.description}</h1>
                    </div>
                    <p className='text-gray-700'>
                        {product.description}
                    </p>
                    <h6 className='text-2xl font-semibold'>$ {product.price}</h6>
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl'
                                    onClick={() => setAmount((prev) => prev - 1)}>-
                            </button>
                            <span className='py-4 px-6 rounded-lg'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl'
                                    onClick={() => setAmount((prev) => prev + 1)}>+
                            </button>
                        </div>
                        <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to
                            Cart
                        </button>
                    </div>
                    <AvailableOfferComponent offerComponentData={product.availableOffers}/>
                    <div className={"border border-b-2"}>
                        <RatingComponent/>
                    </div>
                    <div className={"border border-b-2 p-2"}>
                        <ReviewComponent reviewData={product.reviewData}/>
                        <div className={"text-blue-400 hover:underline underline-offset-2 py-4 px-8"}>
                            show more reviews
                        </div>
                    </div>
                    <QuestionsAnswers questionAnswerData={product.questionsAnswers}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}