import React from "react";

export const QuestionsAnswers = ({questionAnswerData}) => {

    const qnsData = questionAnswerData["question-answer"]

    return (
        <div className={"flex flex-col border border-gray-200 p-2"}>
            <div className={"font-bold text-lg border-b-2 py-4"}>
                Questions and Answers
            </div>
            {qnsData.map((qns) => {
                return (
                    <div key={qns.id} className={"flex flex-col border-b-2 border-gray-200 p-2"}>
                        <div className={"flex flex-row font-semibold py-2"}>
                            <span>Q:</span>
                            <span>{qns.question}</span>
                        </div>
                        <div className={"flex flex-row"}>
                            <div className={"font-semibold"}>A:</div>
                            <div className={"text-gray-500"}>{qns.answer}</div>
                        </div>
                    </div>
                )
            })}
            <div className={"text-blue-400 hover:underline underline-offset-2 py-4"}>
                All Questions
            </div>
        </div>
    )
}