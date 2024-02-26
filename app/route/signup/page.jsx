"use client"
import {SignupResource} from "@/app/route/signup/component/signup-resource";
import {AuthApiProvider} from "@/app/api/auth-api-provider";

const SignUp = () => {
    return (
        <AuthApiProvider>
            <div>
                <SignupResource/>
            </div>
        </AuthApiProvider>
    )
}

export default SignUp