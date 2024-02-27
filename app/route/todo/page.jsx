"use client"
import {TodoResource} from "@/app/route/todo/component/todo-resource";
import {TodoApiProvider} from "@/app/api/todo-api-provider";
import {TodoProvider} from "@/app/providers/todo-provider";

const Todo = () => {
    return (
        <TodoApiProvider>
            <TodoProvider>
                <div>
                    <TodoResource/>
                </div>
            </TodoProvider>
        </TodoApiProvider>
    )
}

export default Todo