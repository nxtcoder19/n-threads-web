import {useProductApi} from "@/app/api/product-api-provider";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {Header} from "@/app/orgs/header";
import {Navbar} from "@material-tailwind/react";
import {NavbarWithMegaMenu} from "@/app/orgs/navbar";

export const ProductDetailsResource = () => {
    const {getProduct} = useProductApi()
    const params = useParams()
    const [product, setProduct] = useState({})
    const [image, setImage] = useState({})

    const [amount, setAmount] = useState(1);
    const productDetails = async () => {
        try {
            const response = await getProduct(params.productId)
            setProduct(response.data)
            setImage(response.data.extra_images[0])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        productDetails()
    }, [params.productId])

    return (
        <div>
            {/*<Header/>*/}
            <NavbarWithMegaMenu/>
            <div className='container mx-auto py-4 flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
                <div className='flex flex-col gap-6 lg:w-2/4'>
                    <img src={image} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                    <div className='flex flex-row justify-between h-24'>
                        {
                            product.extra_images?.map((image) => {
                                return (
                                    <img
                                        key={image}
                                        src={image} alt="" className='w-24 h-24 rounded-md cursor-pointer'
                                        onClick={() => setImage(image)}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:w-2/4'>
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
                </div>
            </div>
        </div>
    )
}