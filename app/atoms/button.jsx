import { useState } from "react"

export const Button = ({label, icon}) => {
    const[focused, setFocused] = useState(false)
    return (
        <div className="flex ">
            <div className="place-self-center">
                {icon}
            </div>
            <div className="px-2 text-2xl">
                {label}
            </div>
        </div>
    )
}