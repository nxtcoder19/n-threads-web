import axios from "axios";

export const boxServer = axios.create({
    baseURL: "http://localhost:3002/api/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})

const login = "/route/login"
const signup = "/route/signup"
const todo = "/route/todo"
const productList = "route/product-list"

export const RoutePath = {
    login,
    signup,
    todo,
    productList
}