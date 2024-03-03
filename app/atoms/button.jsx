import React, { useState } from "react"

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

export const SmallButton = ({name}) => {
    return (
        <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
        >
            {name}
        </button>
    )
}