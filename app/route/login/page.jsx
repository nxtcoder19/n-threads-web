"use client"
import {LoginResource} from "@/app/route/login/component/login-resource";
import {AuthApiProvider} from "@/app/api/auth-api-provider";

const Login = () => {
    return (
        <AuthApiProvider>
            <div>
                <LoginResource/>
            </div>
        </AuthApiProvider>
    )
}

export default Login