import React, {useState} from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import {AuthTextField} from "@/app/atoms/textfield";
import Link from "next/link";
import {Typography} from "@material-tailwind/react";
import {toast} from "react-toastify";
import {useAuthApi} from "@/app/api/auth-api-provider";
import {RoutePath} from "@/app/common/common";

export const LoginResource = () => {

    const {loginUser} = useAuthApi()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(`form data is: ${formData.email} and ${formData.password}`);

        try {
            const response = await loginUser(formData.email, formData.password)
            console.log("response is", response.data['message'])

            if (response.data['message'] === true) {
                // toast.success('Sign up successfull');
                // toast.success("successful", { autoClose: 3000 });
                // window.location.href = "/route/login"
                console.log("bbb")
                // toast('Toast is good', {
                //     hideProgressBar: true,
                //     autoClose: 2000,
                //     type: 'success'
                // });
                window.location.href = RoutePath.todo
                setFormData({ email: "", password: "" });
                console.log("ccc")
            }

        } catch (e) {
            console.log("login failed")
            toast.warning("login failed");
            console.log(e)
        }
    }

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
            <div className="md:w-1/3 max-w-sm">
                <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="login image"
                />
            </div>
            <div className="md:w-1/3 max-w-sm">

                <div className={"pb-6"}>
                    <Typography variant="h4" color="blue-gray">
                        Log In
                    </Typography>
                    <div className={"font-semibold text-sm text-slate-500 text-center md:text-left"}>
                        <Typography color="gray" className="mt-1 font-normal">
                            Nice to meet you! Enter your details to login.
                        </Typography>
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <label className="mr-1">Sign in with</label>
                    <button
                        type="button"
                        className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                    >
                        <BiLogoFacebook
                            size={20}
                            className="flex justify-center items-center w-full"
                        />
                    </button>
                    <button
                        type="button"
                        className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                    >
                        <AiOutlineTwitter
                            size={20}
                            className="flex justify-center items-center w-full"
                        />
                    </button>
                </div>

                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                        Or
                    </p>
                </div>

                <form>
                    <div className={"mb-1 flex flex-col gap-6"}>
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <AuthTextField
                            placeholder={"Email Address"}
                            type={"text"}
                            name={"email"}
                            onChange={handleChange}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Password
                        </Typography>
                        <div className={"py-2"}>
                            <AuthTextField
                                placeholder={"Password"}
                                type={"password"}
                                name={"password"}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/*<input type="submit" value="Submit" />*/}
                </form>

                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <a
                        className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>

                <div onClick={handleSubmit}
                    className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Login
                    </button>
                </div>

                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Don&apos;t have an account?{" "}
                        <a
                            className="text-red-600 hover:underline hover:underline-offset-4"
                            href= {RoutePath.signup}
                        >
                            Register
                        </a>
                    </div>

            </div>
        </section>
    );
};

// export default Login;