import {createContext, useContext} from "react";
import {useApi} from "@/app/api/api-provider";
import useSWR from "swr";

const AddressItemContext = createContext({})

export const AddressItemProvider = ({children}) => {

    const {addressApi} = useApi()
    const {listAddress} = addressApi
    const {data, error, isLoading } = useSWR("/address/list",
        async () => {
            return await listAddress()
        }
    )

    const addressItems = data?.data?.map((addressItem) => {
        return addressItem.id;
    })

    const addressItemData = data?.data.reduce((acc, addressItem) => {
        acc[addressItem.id] = addressItem;
        return acc;
    }, {});

    return (
        <AddressItemContext.Provider
            value={
                {
                    data,
                    error,
                    isLoading,
                    addressItems,
                    addressItemData,
                }
            }>
            {children}
        </AddressItemContext.Provider>
    )
}

export const AddressItemConsumer = AddressItemContext.Consumer;

export const useAddressItem = () => {
    return useContext(AddressItemContext)
}