import {createContext, useContext} from "react";
import {boxServer} from "@/app/common/common";

const TodoApiContext = createContext()
export const TodoApiProvider = ({children}) => {
    return (
        <TodoApiContext.Provider value={{

            createTodo: async (todoData) =>  boxServer.post("/todo/create",todoData),

            updateTodo: async (updateTodoData) => boxServer.post("/todo/update", updateTodoData),

            getTodo: async (id) => {
                if (id) {
                    return boxServer.get(`/todo/get/${id}`)
                }
                return null
            },

            getTodos: async() => boxServer.get("/todo/get"),

            deleteTodo: async (id) => {
                if (id) {
                    return boxServer.get(`/todo/delete/${id}`)
                }
                return null
            },

        }}>
            {children}
        </TodoApiContext.Provider>
    )
}

export const useTodoApi = () => {
    return useContext(TodoApiContext)
}