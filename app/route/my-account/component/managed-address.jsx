
import React, {useState} from "react";
import {useAddressItem} from "@/app/providers/address-item-provider";
import {AddressItems} from "@/app/orgs/address-items";
import {HandleAddress} from "@/app/route/my-account/component/handle-address";

export const ManagedAddress = () => {

    const {data, error, isLoading, addressItems, addressItemData} = useAddressItem()

    if (isLoading) return (
        <div>
            Loading...
        </div>
    )

    return (
        <div className={"flex flex-col pb-4 gap-4"}>
            <div className={"flex flex-row gap-4 justify-between"}>
                <h1 className={"text-2xl font-semibold"}>Managed Addresses</h1>
                <HandleAddress mode={"add"}/>
            </div>
            <AddressItems addressItems={addressItems} addressItemData={addressItemData}/>
        </div>
    )
}


