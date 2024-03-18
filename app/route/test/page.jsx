"use client"

import {DeleteDialog, EditDialog} from "@/app/molecule/dialog";

const Test = () => {

    return (
        <div className={"container mx-auto"}>
            Test page
            <div>
                <EditDialog />
                <DeleteDialog/>
            </div>
        </div>
    )
}

export default Test