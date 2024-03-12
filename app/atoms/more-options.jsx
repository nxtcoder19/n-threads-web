import { IoMdMore } from "react-icons/io";
import {useState} from "react";
import {AlertDialogDemo} from "@/app/atoms/toast";
export const MoreOptions = ({onEdit, onDelete}) => {
    const [enableMoreOptions, setEnableMoreOptions] = useState(false)
    const [enableUpdateForm, setEnableUpdateForm] = useState(false)

    const toggleOptions = () => {
        setEnableMoreOptions(!enableMoreOptions)
    }

    const toggleUpdateForm = () => {
        setEnableUpdateForm(!enableUpdateForm)
    }

    return(
        <div className={"py-4 relative"}>
            <div onClick={toggleOptions}>
                <IoMdMore/>
            </div>
            {enableMoreOptions && (
                <div className={"absolute to-70%"}>
                    <div className="flex flex-col px-2 border rounded bg-white">
                        <span onClick={toggleUpdateForm}>Edit</span>
                        <span onClick={onDelete}>Delete</span>
                    </div>
                </div>
            )}
            <AlertDialogDemo/>
            {/*{enableUpdateForm && (*/}
            {/*    <AlertDialogDemo/>*/}
            {/*)}*/}
        </div>
    )
}