import {Confetti} from "@jengaicons/react"
export const AvailableOfferComponent = ({offerComponentData}) =>{

    const offerData = offerComponentData['offer-details']

    return (
        <div>
            <div className={"font-bold py-2 text-lg"}>
                Available offers
            </div>
            <div className={"p-2"}>
                {offerData.map((offer) => {
                    return (
                        <div key={offer.id} className={"flex flex-row"}>
                            <div className={"flex items-center"}>
                                <Confetti size={14} color={"blue"}/>
                            </div>
                            <div className={"font-bold px-2"}>{offer.title}</div>
                            <div className={"text-gray-500 px-2"}>{offer.description}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}