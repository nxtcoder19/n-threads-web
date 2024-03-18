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
import React from "react";
import { DialogTextField} from "@/app/atoms/textfield";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {CancelButton, ContinueButton, TextTypeButton} from "@/app/atoms/button";

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
                    <div onClick={() => {
                        console.log("clicked")
                    }}>
                        <Button type="submit" className={"bg-blue-500 hover:bg-blue-600"}>Save changes</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


export const DeleteDialog = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {/*<Button variant="outline">Show Dialog</Button>*/}
                <Button variant="text">Delete Dialog</Button>
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
                        // placeholder="confirm"
                        type={"text"}
                        name={"Description"}
                        // onChange={handleChange}
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <div onClick={() => {
                        console.log("clicked")
                    }}>
                        <AlertDialogAction className={"bg-blue-500 hover:bg-blue-600"}>Continue</AlertDialogAction>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

