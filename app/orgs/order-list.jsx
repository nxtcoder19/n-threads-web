export const OrderList = ({orderListData}) => {

    const orders = orderListData["order-list"]

    return (
        <div>
            <div className={"text-lg font-bold mb-4"}>
                Your orders are here:
            </div>
            {
                orders.map((item) => {
                    return (
                        <div key={item.id} className={"border p-4 mb-4 rounded-xl"}>
                            <div className={"flex flex-row justify-evenly"}>
                                <img src={item.imageUrl} alt={"cart-image"}
                                     className={"w-full rounded-lg sm:w-40"}/>
                                <div className={"flex flex-col px-4"}>
                                    <span>{item.title}</span>
                                    <div className={"text-sm text-gray-500 py-4"}>
                                        <span>Color: {item.color}</span>
                                        <span className={"px-2"}>Size: {item.size}</span>
                                    </div>
                                </div>
                                <span className={"text-sm text-gray-500"}>Rs {item.price}</span>
                                <div className={"flex flex-col px-4"}>
                                    <span className={"text-sm font-bold"}>{item.status}</span>
                                    <span className={"text-sm text-gray-500 py-4"}>{item.statusMessage}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export const OrderDetails = () => {
    return (
        <div className={"flex flex-col"}>

            <div className={"flex flex-row border mb-4 p-4 justify-evenly"}>
                <div className={"flex flex-col"}>
                    <span className={"text-lg font-bold"}>Delivery Address</span>
                    <span className={"text-sm font-semibold py-2"}>Piyush Kumar</span>
                    <span
                        className={""}>Prachala nivas, room no : 501 Junasandra, Bengaluru - 560035, Karnataka
                    </span>
                    <div className={"flex flex-row py-2"}>
                        <span className={"text-sm font-semibold"}>Phone number</span>
                        <span className={"px-4"}>7004667341</span>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <span className={"text-lg font-bold"}>Your Rewards</span>
                    <span>
                        5% Cashback on Flipkart Axis Bank Card
                    </span>
                    <span className={"text-sm text-gray-500"}>
                        To be adjusted in your March statement
                    </span>
                </div>
            </div>

            <div className={"border p-4"}>
                <div className={"flex flex-row"}>
                    <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt={"cart-image"}
                         className={"w-full rounded-lg sm:w-40"}/>
                    <div className={"flex flex-col px-4"}>
                        <span>Nike Air Max 2021</span>
                        <div className={"text-sm text-gray-500 py-4"}>
                            <span>Color: Black</span>
                            <span className={"px-2"}>Size: M</span>
                        </div>
                        <span className={"text-sm font-bold"}>Rs 293</span>
                    </div>
                </div>

                <div className={"px-4"}>

                </div>
            </div>
        </div>
    )
}