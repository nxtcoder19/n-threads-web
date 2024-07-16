import {createContext, useContext} from "react";
import {boxServer} from "@/app/common/common";

const AuthApiContext = createContext({})
export const AuthApiProvider = ({children}) => {
    return (
        <AuthApiContext.Provider value={{

            signupUser: async (signupData) =>
            {
                console.log("api signup data", signupData)
                return boxServer.post("/auth/signup",signupData)
            },

            loginUser: async (email, password) => {
                if (email && password) {
                    return boxServer.get(
                        `/auth/login/${email}/${password}`,
                    )
                }
                return null
            },

            whoAmI: async () => boxServer.get("/auth/whoami"),

            updateUser: async (updateUserData) =>
                boxServer.post("/auth/updateUser", updateUserData),

            deleteUser: async (email) => {
                if (email) {
                    return boxServer.get(`/auth/deleteUser/${email}`)
                }
                return null
            },

            logoutUser: async() => boxServer.delete("/auth/logout"),

            getSession: async () => boxServer.get(".secret/session-data"),

        }}>
            {children}
        </AuthApiContext.Provider>
    )
}

export const useAuthApi = () => {
    return useContext(AuthApiContext)
}