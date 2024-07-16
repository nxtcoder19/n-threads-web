import {Confetti} from "@jengaicons/react"
export const AvailableOfferComponent = ({offerComponentData}) =>{

    // const offerData = offerComponentData['offer-details']
    const offerData = offerComponentData

    return (
        <div>
            <div className={"font-bold py-2 text-lg"}>
                Available offers
            </div>
            <div className={"p-2"}>
                {offerData?.map((offer, index) => {
                    return (
                        <div key={index} className={"flex flex-row py-2 gap-4 items-center"}>
                            <div className={"flex items-center"}>
                                <Confetti size={12} color={"blue"}/>
                            </div>
                            <span className={"font-semibold px-2 text-sm inline-block"}>{offer.title}</span>
                            <div className={"text-gray-500 px-2 text-sm"}>{offer.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}