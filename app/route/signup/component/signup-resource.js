import {AuthTextField} from "@/app/atoms/textfield";
import React, {useState} from "react";
import {
    Typography,
} from "@material-tailwind/react";
import {useAuthApi} from "@/app/api/auth-api-provider";
// import { toast } from 'react-hot-toast';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignupResource = () => {

    const {signupUser} = useAuthApi()

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (event) => {
        switch (event.target.name) {
            case "first_name":
                setFirstName(event.target.value)
                break
            case "last_name":
                setLastName(event.target.value)
                break
            case "email":
                setEmail(event.target.value)
                break
            case "password":
                setPassword(event.target.value)
                break
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const signupData = {
            first_name,
            last_name,
            email,
            password
        }

        try {
            const response = await signupUser(JSON.stringify(signupData))
            console.log("response is", response.status)

            if (response.status === 200) {
                // toast.success('Sign up successfull');
                toast.success("successful", { autoClose: 3000 });
                console.log("aaaa")
            }

        } catch (e) {
            toast.warning("signup failed");
            console.log(e)
        }

    }

    return (
        <div className={"h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0"}>

            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="login image"
                />
            </div>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">

                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <div className={"font-semibold text-sm text-slate-500 text-center md:text-left"}>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                </div>

                <div className="mb-1 flex flex-col gap-6 py-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your First Name
                    </Typography>
                    <AuthTextField
                        placeholder="first name"
                        type={"text"}
                        name={"first_name"}
                        onChange={handleChange}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Last Name
                    </Typography>
                    <AuthTextField
                        placeholder="Last Name"
                        type={"text"}
                        name={"last_name"}
                        onChange={handleChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Your Email
                    </Typography>
                    <AuthTextField
                        placeholder="email"
                        type={"text"}
                        name={"email"}
                        onChange={handleChange}
                    />

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <AuthTextField
                        placeholder="********"
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                    />
                </div>

                <div className={"py-2"}>
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox"/>
                        <span>I agree the term and conditions</span>
                    </label>
                </div>

                <div className="text-center md:text-left">
                    <button onClick={handleSubmit}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>

                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    Already have an account?{" "}
                    <a
                        className="text-red-600 hover:underline hover:underline-offset-4"
                        href="/route/login"
                    >
                        SignIn
                    </a>
                </div>

            </form>
        </div>
    )
}