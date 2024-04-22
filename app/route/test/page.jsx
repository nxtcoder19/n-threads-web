"use client"

import {DeleteDialog, EditDialog} from "@/app/molecule/dialog";
import React, {useState} from "react";
import {RatingComponent, ReviewCard, ReviewComponent} from "@/app/orgs/review-component";
import {Button} from "@/components/ui/button";
import {AuthTextField, DialogTextField} from "@/app/atoms/textfield";
import AvailableOffers from "../../model/offer-component-data.json"
import {AvailableOfferComponent} from "@/app/molecule/available-offer-component";
import {QuestionsAnswers} from "@/app/molecule/questions-answers";
import QuestionAnswerData from "../../model/quention-answer.json"
import {CartItems} from "@/app/orgs/cart-items";
import CartItemsData from "../../model/cart-item-data.json"

const Test = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        {value: 'option1', label: 'Option 1'},
        {value: 'option2', label: 'Option 2'},
        {value: 'option3', label: 'Option 3'},
    ];

    const handleChange = event => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className={"container mx-auto"}>
            Test page
            <div className={"flex flex-col gap-8"}>

                <div className={"flex flex-row gap-2"}>
                    <Button disabled={true} variant="text">Text button</Button>
                    <Button variant="default">default button</Button>
                    <Button variant="destructive">destructive button</Button>
                    <Button variant="outline">outline button</Button>
                    <Button variant="secondary">secondary button</Button>
                    <Button variant="link">link button</Button>
                    <Button variant="ghost">ghost button</Button>
                </div>

                <div className={"flex flex-row gap-2"}>
                    <AuthTextField placeholder={"auth text field"}/>
                    <DialogTextField placeholder={"dialog text field"}/>
                </div>

                <div>
                    <EditDialog/>
                    <DeleteDialog/>
                </div>

                <h1>Rating page:</h1>
                <div className={"border border-b-2"}>
                    <RatingComponent/>
                </div>

                <h1>Review page:</h1>
                <div className={"border border-b-2 p-2"}>
                    <ReviewComponent/>
                    <ReviewComponent/>
                    <div className={"text-blue-400 hover:underline underline-offset-2 py-4 px-8"}>
                        show more reviews
                    </div>
                </div>

                <h1>Available offer component:</h1>
                <div>
                    <AvailableOfferComponent offerComponentData={AvailableOffers}/>
                </div>

                <h1>Questions Answers:</h1>
                <div>
                    <QuestionsAnswers questionAnswerData={QuestionAnswerData}/>
                </div>

                <h1>Cart items:</h1>
                <div>
                    <CartItems cartItemData={CartItemsData}/>
                </div>
            </div>
        </div>
    )
}

export default Test