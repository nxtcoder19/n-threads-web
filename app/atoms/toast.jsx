"use client"

import { Button } from "@/components/ui/button"
// import { ToastAction } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/use-toast"
import { toast } from "sonner"

export const ShowToast = () => {
    // const { toast } = useToast()

    return (
        <Button
            variant="outline"
            className={"bg-red-300"}
            onClick={() => {
                console.log("Abc")
                toast("Event has been created.")
                // toast({
                //     description: "Your message has been sent.",
                // })
                // toast({
                //     title: "Scheduled: Catch up ",
                //     description: "Friday, February 10, 2023 at 5:57 PM",
                //     // action: (
                //     //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                //     // ),
                // })
                console.log("xyz")
            }}
        >
            Add to calendar
        </Button>
    )
}

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
// import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
    return (
        <AlertDialog>
            {/*<AlertDialogTrigger asChild>*/}
            {/*    <Button variant="outline">Show Dialog</Button>*/}
            {/*</AlertDialogTrigger>*/}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account and remove your data from our servers.
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

