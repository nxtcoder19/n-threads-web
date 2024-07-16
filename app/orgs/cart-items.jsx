import {DeleteCartDialog, DeleteDialog} from "@/app/molecule/dialog";
import {useState} from "react";
import {BellRinging} from "@jengaicons/react";

export const CartItems = ({cartItems, cartItemData}) => {

    // const cartItems = cartItemData
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedCartItemId, setSelectedCartItemId] = useState(null);

    const handleDelete = () => {
        // Perform the delete action here
        console.log('Delete clicked for', selectedCartItemId);
        setDialogOpen(false);
    };

    return (
        <div>
            <div className={"font-bold text-lg py-4"}>
                Cart Items:
            </div>
            <div className={"flex flex-row justify-between p-4 gap-4"}>
                <div className={"border p-4 flex-1"}>
                    {cartItems?.map((cartItemId) => {
                        return (
                            <div key={cartItemId} onClick={() =>  window.location.href = `product-category/product-list/${cartItemData[cartItemId].product.id}`} className={" border-b-2 border-gray-200 py-4"}>
                                <div className={"flex justify-between"}>

                                    <div className={"flex flex-row"}>
                                        <img src={cartItemData[cartItemId].product.imageUrl} alt={"cart-image"}
                                             className={"w-full rounded-lg sm:w-40"}/>
                                        <div className={"flex flex-col justify-between px-4"}>
                                            <div className={"flex flex-col"}>
                                                <span className={"text-lg font-bold"}>{cartItemData[cartItemId].product.name}</span>
                                                <span className={"text-sm text-gray-500"}>{cartItemData[cartItemId].product.description}</span>
                                                <span className={"text-sm text-gray-500"}>{cartItemData[cartItemId].product.size}</span>
                                            </div>
                                            <div className={"text-gray-500"}>
                                                {cartItemData[cartItemId].product.price}$
                                            </div>
                                        </div>
                                    </div>

                                    <div className={"flex flex-col gap-4"}>
                                        <div className={"flex justify-end"}>
                                            <div className="flex items-center border-gray-100">
                                            <span
                                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                <input className={"h-8 w-8 border bg-white text-center text-xs"}
                                                       type={"number"} min={"1"} max={"10"} value={"2"}/>
                                                <span
                                                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                            </div>
                                        </div>
                                        <BellRinging size={16} onClick={(event)=>{
                                            event.stopPropagation()
                                            setSelectedCartItemId(cartItemId)
                                            setDialogOpen(true)
                                        }} className={"flex justify-end"}/>
                                        <span className={"text-sm font-semibold text-green-700 px-2"}>Delivery by Sat Apr 27</span>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                    }
                    <DeleteDialog
                        open={dialogOpen}
                        onClose={() => setDialogOpen(false)}
                        onDelete={handleDelete}
                    />
                </div>

                <div className={"flex flex-col border p-4 h-min w-1/3"}>
                    <div className={"divide-y-2 divide-dashed"}>
                        <div>
                            <div className={"font-bold text-lg text-gray-500 border-b-2"}>
                                Price Details
                            </div>
                            <div className={"flex justify-between font-bold text-sm text-gray-500 py-2"}>
                                <span>Price(4 items)</span>
                                <span>Rs 83,990</span>
                            </div>
                            <div className={"flex justify-between font-bold text-sm text-gray-500 py-2"}>
                                <span>Discount</span>
                                <span>Rs 60,000</span>
                            </div>
                            <div className={"flex justify-between font-bold text-sm text-gray-500 py-2"}>
                                <span>Delivery Charges</span>
                                <span>Rs 500</span>
                            </div>
                        </div>
                        <div className={"flex justify-between font-bold text-sm text-gray-500 py-4"}>
                            <span>Total amount</span>
                            <span>Rs 23,390</span>
                        </div>
                        <div className={"font-bold text-sm text-green-700 py-4"}>You will save ₹60,000 on this order</div>
                    </div>
                </div>

            </div>
        </div>
    )
}