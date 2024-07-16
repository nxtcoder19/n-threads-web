import {useApi} from "@/app/api/api-provider";
import {createContext, useContext, useState} from "react";
import useSWR from "swr";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const {authApi} = useApi();
    const {whoAmI} = authApi;

    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const {data, error, isLoading} = useSWR("/whoami",
        async () => {
            // return await whoAmI()
            try {
                const response = await whoAmI()
                console.log("whoami pro response is", response.status, response.data)
                if (response.status === 200) {
                    setUser(response.data)
                    setIsLoggedIn(true)
                    setUserName(response.data.first_name)
                }
                return response
            } catch (e) {
                console.log(e)
            }
        }
    )

    return (
        <AuthContext.Provider
            value={
                {
                    data,
                    error,
                    isLoading,
                    user,
                    isLoggedIn,
                    userName,
                }
            }>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer;

export const useAuth = () => {
    return useContext(AuthContext)
}