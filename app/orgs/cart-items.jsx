export const CartItems = ({cartItemData}) => {

    const cartItems = cartItemData["cart-item"]

    return (
        <div>
            <div className={"font-bold text-lg py-4"}>
                Cart Items:
            </div>
            <div className={"flex flex-row justify-between p-4"}>
                <div className={"border p-4 flex-1"}>
                    {cartItems.map((item) => {
                        return (
                            <div key={item.id} className={" border-b-2 border-gray-200 py-4"}>
                                <div className={"flex justify-between"}>

                                    <div className={"flex flex-row"}>
                                        <img src={item.imageUrl} alt={"cart-image"}
                                             className={"w-full rounded-lg sm:w-40"}/>
                                        <div className={"flex flex-col justify-between px-4"}>
                                            <div className={"flex flex-col"}>
                                                <span className={"text-lg font-bold"}>{item.title}</span>
                                                <span className={"text-sm text-gray-500"}>{item.description}</span>
                                                <span className={"text-sm text-gray-500"}>{item.size}</span>
                                            </div>
                                            <div className={"text-gray-500"}>
                                                {item.price}$
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center border-gray-100">
                                        <span
                                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input className={"h-8 w-8 border bg-white text-center text-xs"}
                                                   type={"number"} min={"1"} max={"10"} value={"2"}/>
                                            <span
                                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <div className={"border p-4 h-min"}>
                    <div>
                        Price Details
                    </div>
                </div>
            </div>
        </div>
    )
}