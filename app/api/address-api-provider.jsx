import {createContext, useContext} from "react";
import {boxServer} from "@/app/common/common";

const AddressApiContext = createContext({})
export const AddressApiProvider = ({children}) => {
    return (
        <AddressApiContext.Provider value={{
            /// Address
            addAddress: async (addressData) =>  {
                console.log("addAddress called with addressData", addressData)
                return boxServer.post("/address/create", addressData)
            },

            updateAddress: async (id,updateAddressData) => {
                console.log("updateAddress called with id", id,updateAddressData)
                if (id) {
                    return boxServer.put(`/address/update/${id}`, updateAddressData)
                }
                return null
            },

            listAddress: async() => {
                return boxServer.get("/address/list")
            },

            deleteAddress: async (id) => {
                console.log("deleteAddress called with id", id)
                if (id) {
                    return boxServer.delete(`/address/delete/${id}`)
                }
                return null
            },
        }}>
            {children}
        </AddressApiContext.Provider>
    )
}

export const useAddressApi = () => {
    return useContext(AddressApiContext)
}