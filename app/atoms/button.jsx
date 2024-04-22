import React, { useState } from "react"
import { Button } from "@material-tailwind/react";

// export const Button = ({label, icon}) => {
//     const[focused, setFocused] = useState(false)
//     return (
//         <div className="flex ">
//             <div className="place-self-center">
//                 {icon}
//             </div>
//             <div className="px-2 text-2xl">
//                 {label}
//             </div>
//         </div>
//     )
// }

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

export const TextTypeButton = ({title}) => {
    return (
        <Button variant="text">{title}</Button>
    )
}

export const ContinueButton = ({title, onClick}) => {
    return (
        <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={onClick}
            disabled={true}
        >
            {title}
        </button>
    )
}

export const CancelButton = () => {
    return (
        <Button variant="outlined">outlined</Button>
    )
}

export const ConfirmButton = () => {
    return (
        <button>
            <Button/>
        </button>
    )
}