import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import React, {useState} from "react";
import { DialogTextField} from "@/app/atoms/textfield";
import { Label } from "@/components/ui/label"
import {ArrowsOut, BellRinging} from "@/app/common/icons";

export const EditDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="text">Edit Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-left">
                            Title
                        </Label>
                        <DialogTextField
                            placeholder="title"
                            type={"text"}
                            name={"title"}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-left">
                            Description
                        </Label>
                        {/*<Input*/}
                        {/*    id="username"*/}
                        {/*    defaultValue="@peduarte"*/}
                        {/*    className="col-span-3"*/}
                        {/*/>*/}
                        <DialogTextField
                            placeholder="Description"
                            type={"text"}
                            name={"Description"}
                            // onChange={handleChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                        <Button type="submit" className={"bg-blue-500 hover:bg-blue-600"} onClick={() => {
                            console.log("clicked one")
                        }}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


// export const DeleteDialog = () => {
//
//     const [textInput, setTextInput] = useState('')
//
//     return (
//         <AlertDialog>
//             <AlertDialogTrigger asChild>
//                 {/*<Button variant="outline">Show Dialog</Button>*/}
//                 <Button variant="text">Delete Dialog</Button>
//             </AlertDialogTrigger>
//             <AlertDialogContent>
//                 <AlertDialogHeader>
//                     <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//                     <AlertDialogDescription>
//                         This action cannot be undone. This will permanently delete your
//                         account and remove your data from our servers.
//                     </AlertDialogDescription>
//                 </AlertDialogHeader>
//                 <div>
//                     <div className={"py-2"}>
//                         <AlertDialogDescription>
//                             Type <b>confirm</b> to delete
//                         </AlertDialogDescription>
//                     </div>
//                     <DialogTextField
//                         // placeholder="confirm"
//                         type={"text"}
//                         name={"Description"}
//                         onChange={(e)=> {
//                             setTextInput(e.target.value)
//                         }}
//                         // onChange={handleChange}
//                     />
//                 </div>
//                 <AlertDialogFooter>
//                     <AlertDialogCancel>Cancel</AlertDialogCancel>
//                         <AlertDialogAction className={"bg-blue-500 hover:bg-blue-600"} disabled={textInput !== 'confirm'} onClick={()=> {
//                             console.log("delete clicked")
//                             setTextInput('')
//                         }}>Continue</AlertDialogAction>
//                 </AlertDialogFooter>
//             </AlertDialogContent>
//         </AlertDialog>
//     )
// }


export const DeleteCartDialog = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className={""} asChild>
                <ArrowsOut size={16}/>
                {/*<Button variant="outline">Show Dialog</Button>*/}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        cart item.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export const DeleteDialog = ({ open, onClose, onDelete }) => {
    const [textInput, setTextInput] = useState('');

    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogTrigger asChild>
                <div />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div>
                    <div className={"py-2"}>
                        <AlertDialogDescription>
                            Type <b>confirm</b> to delete
                        </AlertDialogDescription>
                    </div>
                    <DialogTextField
                        type={"text"}
                        name={"Description"}
                        onChange={(e) => {
                            setTextInput(e.target.value)
                        }}
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className={"bg-blue-500 hover:bg-blue-600"}
                        disabled={textInput !== 'confirm'}
                        onClick={() => {
                            onDelete();
                            setTextInput('');
                        }}>
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}


