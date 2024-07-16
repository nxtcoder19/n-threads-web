import axios from "axios";

export const boxServer = axios.create({
    baseURL: "http://localhost:3002/api/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
})

const login = "/route/login"
const signup = "/route/signup"
const todo = "/route/todo"
const productList = "route/product-list"
const ProductCategory = "/route/product-category"
const CartItems = "/route/cart-items"
const MyAccount = "/route/my-account"

export const RoutePath = {
    login,
    signup,
    todo,
    productList,
    ProductCategory,
    CartItems,
    MyAccount
}