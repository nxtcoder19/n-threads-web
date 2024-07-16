import {AuthTextField, DialogTextField} from "@/app/atoms/textfield";
import FaqsQuestionsAnswersData from "../../../model/faq-questions-answers.json"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {useAuth} from "@/app/providers/auth-provider";

export const General = () => {

    const faqsQuestionsAnswers = FaqsQuestionsAnswersData["faq-questions-answers"]
    const {user} = useAuth()

    return (
        <div className={"flex flex-col gap-12"}>
            <div className={"border border-b-2 p-4"}>
                <h1 className={"text-lg font-semibold"}>Profile</h1>
                <div className={"flex flex-row justify-between gap-2 py-2"}>
                    <div className={"flex-1"}>
                        <span className={"text-sm font-medium"}>First name</span>
                        <AuthTextField placeholder={"Enter your name"} value={user?.first_name}/>
                    </div>
                    <div className={"flex-1"}>
                        <span className={"text-sm font-medium"}>Last name</span>
                        <AuthTextField placeholder={"Enter your name"} value={user?.last_name}/>
                    </div>
                </div>
                <div className={"flex flex-row justify-between gap-2 py-2"}>
                    <div className={"flex-1"}>
                        <span className={"text-sm font-medium"}>Email Address</span>
                        <AuthTextField placeholder={"Enter your email address"} value={user?.email}/>
                    </div>
                    <div className={"flex-1"}>
                        <span className={"text-sm font-medium"}>Mobile Number</span>
                        <AuthTextField placeholder={"Enter your mobile number"}/>
                    </div>
                </div>
            </div>

            <div className={"border border-b-2 p-4"}>
                <h1 className={"text-lg font-semibold"}>FAQs</h1>
                {
                    faqsQuestionsAnswers.map((faqQuestionAnswer, index) => {
                        return (
                            <div key={index} className={"flex flex-col justify-between gap-2 py-2"}>
                                <div className={"flex-1"}>
                                    <span className={"text-sm font-medium"}>{faqQuestionAnswer.question}</span>
                                </div>
                                <div className={"flex-1"}>
                                    <span className={"text-sm"}>{faqQuestionAnswer.answer}</span>
                                </div>
                            </div>
                        )
                    })
                }
                <h1 className={"text-lg font-semibold py-4"}>Delete And Deactivate Account</h1>
                <div className={"text-sm pb-4"}>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</div>
                <div className={"flex flex-row gap-2 py-2"}>
                    <DeleteAccount/>
                    <DeactivateAccount/>
                </div>
            </div>
        </div>
    )
}

const DeleteAccount = () => {
    const [textInput, setTextInput] = useState('')

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {/*<Button variant="outline">Show Dialog</Button>*/}
                <Button variant="destructive">Delete Account</Button>
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
                        onChange={(e)=> {
                            setTextInput(e.target.value)
                        }}
                        // onChange={handleChange}
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className={"bg-blue-500 hover:bg-blue-600"} disabled={textInput !== 'confirm'} onClick={()=> {
                        console.log("delete clicked")
                        setTextInput('')
                    }}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

const DeactivateAccount = () => {
    const [textInput, setTextInput] = useState('')

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {/*<Button variant="outline">Show Dialog</Button>*/}
                <Button variant="outline">Deactivate Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will deactivate your account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div>
                    <div className={"py-2"}>
                        <AlertDialogDescription>
                            Type <b>confirm</b> to deactivate
                        </AlertDialogDescription>
                    </div>
                    <DialogTextField
                        // placeholder="confirm"
                        type={"text"}
                        name={"Description"}
                        onChange={(e)=> {
                            setTextInput(e.target.value)
                        }}
                        // onChange={handleChange}
                    />
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className={"bg-blue-500 hover:bg-blue-600"} disabled={textInput !== 'confirm'} onClick={()=> {
                        console.log("delete clicked")
                        setTextInput('')
                    }}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}


