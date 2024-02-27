import {createContext, useContext} from "react";
import TodoDetailsData from "../model/product-category-data.json"
import {useTodoApi} from "@/app/api/todo-api-provider";
import useSWR from "swr";

const TodoContext = createContext({})

export const TodoProvider = ({children}) => {
    // const data = TodoDetailsData['category-details']
    const {getTodos} = useTodoApi()
    const {data, error, isLoading } = useSWR("/todo/get",
            async () => {
                return await getTodos()
            }
        )

    const todos = data?.data?.map((todo) => {
        return todo.id;
    });

    const todoData = data?.data.reduce((acc, todo) => {
        acc[todo.id] = todo;
        return acc;
    }, {});

    console.log("todos", todos)
    console.log("tododata", todoData)
    console.log("data", data)

     // console.log("aaa",data)
    return (
        <TodoContext.Provider
            value={
                {
                    data,
                    isLoading,
                    todos,
                    todoData
                }
            }>
            {children}
        </TodoContext.Provider>
    )
}

export const TodoConsumer = TodoContext.Consumer;

export const useTodo = () => {
    return useContext(TodoContext)
}