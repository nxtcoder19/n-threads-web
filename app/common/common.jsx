import axios from "axios";

export const boxServer = axios.create({
    baseURL: "http://localhost:3002/api/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})