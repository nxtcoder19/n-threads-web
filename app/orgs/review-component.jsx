import {CircularImg} from "@/app/molecule/images";
import {Button} from "@/components/ui/button";
import React from "react";
import {  Rating } from "@material-tailwind/react";

export const ReviewComponent = ({reviewData}) => {
    return (
        <div className={" flex flex-col py-4"}>
            {
                reviewData?.map((review, index) => {
                 return (
                     <div key={index} className={"flex flex-row border-b-2 border-gray-200 py-4"}>
                         <div>
                             <CircularImg avatarUrl={review.avatarUrl}/>
                         </div>

                         <div className={"px-2 flex-1"}>
                             <div className={"flex flex-row justify-between"}>
                                 <div className={"flex flex-col"}>
                                     <span className={"font-bold"}>
                                         {review.name}
                                     </span>
                                     <span className={"text-gray-500"}>
                                         {review.address}
                                     </span>
                                 </div>
                                 <div className={" flex items-center gap-2"}>
                                     <Rating unratedColor="blue" ratedColor="blue" value={review.rating} readonly />
                                     <span className={"text-gray-500"}>{review.date}</span>
                                 </div>
                             </div>
                             <div className={"py-4 text-gray-500"}>
                                 {review.description}
                             </div>
                             <div className={"text-blue-400 hover:underline underline-offset-2"}>
                                 show images
                             </div>
                         </div>
                     </div>
                 )
            })}
        </div>
    )
}

export const RatingComponent = () => {
    return (
        <div className={"flex p-4 flex-col"}>
            <div className={"flex flex-1 flex-row justify-between"}>
                <span className={"font-bold"}>Reviews & Ratings</span>
                <Button variant="outline">Rate Product</Button>
            </div>

            <div>

                <div>
                    <div className={"flex flex-col text-gray-500"}>
                        <span className={"font-bold"}>4.1</span>
                        <span>2,10,209 Ratings</span>
                        <span>&</span>
                        <span>15,961 Reviews</span>
                    </div>
                    <div>

                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}