import {Card,
    CardBody,
    Typography,} from "@material-tailwind/react";
import React, {useState} from "react";
import {AuthTextField} from "@/app/atoms/textfield";
import {useTodoApi} from "@/app/api/todo-api-provider";
import {useTodo} from "@/app/providers/todo-provider";
import {MoreOptions} from "@/app/atoms/more-options";
import {EditDialog} from "@/app/molecule/dialog";

export const TodoResource = () => {

    const {createTodo} = useTodoApi()
    const {todoData, todos} = useTodo()
    const [formData, setFormData] = useState({ title: "", description: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        // console.log(`form data is: ${formData.title} and ${formData.description}`);
        //
        // try {
        //     const response = await createTodo(formData)
        //     console.log("response is", response)
        //
        // } catch (e) {
        //     console.log(e)
        // }
    }

    const moreOptions = [
        {id: 1, label: "Edit", value: "Edit", onClick: {handleSubmit}},
        {id:2, label: "Delete", value: "Delete", onClick: {handleSubmit}},
    ];

    return (
        <div className={"h-screen flex flex-col md:flex-row justify-center md:space-y-0 md:space-x-16 py-6 mx-5 md:mx-0 md:my-0"}>

            <div>
                <Typography variant="h4" color="blue-gray">
                    Add Todo
                </Typography>
                <div className={"font-semibold text-sm text-slate-500 text-center md:text-left"}>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to add todo.
                    </Typography>
                </div>
                <div className={"mb-1 flex flex-col gap-6 py-6"}>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Title
                    </Typography>
                    <AuthTextField
                        placeholder="title"
                        type={"text"}
                        name={"title"}
                        onChange={handleChange}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Description
                    </Typography>
                    <AuthTextField
                        placeholder="description"
                        type={"text"}
                        name={"description"}
                        onChange={handleChange}
                    />
                </div>
                <div onClick={handleSubmit}
                    className="text-center md:text-left">
                    <button
                            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                            type="submit"
                    >
                        Add Todo
                    </button>
                    <EditDialog/>
                </div>
            </div>

            <div>
                <Typography variant="h4" color="blue-gray">
                    List of Todos:
                </Typography>
                <div className={""}>
                    {
                        todos?.map((todoId) => {
                            return (
                                // <div className={"flex flex-row"} key={todoId}>
                                //     <span>{todoData[todoId].title}</span>
                                //     <span>{todoData[todoId].description}</span>
                                // </div>
                                <Card key={todoId}
                                    className="mt-6 w-96 py-4 px-2">
                                    <CardBody>
                                        <div className={"flex flex-row justify-between"}>
                                            <div>
                                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                                    Title: {todoData[todoId].title}
                                                </Typography>
                                                <Typography>
                                                    Description: {todoData[todoId].description}
                                                </Typography>
                                            </div>
                                            <div>
                                               <MoreOptions moreOptions={moreOptions} todoId={todoId}/>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}