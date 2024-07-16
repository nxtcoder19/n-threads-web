import {useApi} from "@/app/api/api-provider";
import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {DialogTextField} from "@/app/atoms/textfield";
import {Textarea} from "@/components/ui/textarea";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";

export const HandleAddress = ({ isUpdate, mode ,initialData, dialogOpen, setDialogOpen }) => {

    const {addressApi} = useApi()
    const {addAddress, updateAddress} = addressApi;

    const initialFormState = {
        name: "",
        mobileNo: 0,
        pinCode: 0,
        locality: "",
        area: "",
        city: "",
        state: "",
        landmark: "",
        alternatePhoneNo: 0,
        addressType: "Home",
    };

    const [formData, setFormData] = useState(
        initialFormState
    );

    useEffect(() => {
        if (isUpdate && initialData) {
            setFormData(initialData);
        } else {
            setFormData(initialFormState);
        }
    }, [isUpdate, initialData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        // setFormData({ ...formData, [name]: value });
        setFormData({
            ...formData,
            [name]: name === "mobileNo" || name === "pinCode" || name === "alternatePhoneNo" ? parseInt(value) : value,
        });
    };

    const handleRadioChange = (value) => {
        setFormData({ ...formData, addressType: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(`form data is: ${formData.name} and ${formData.mobileNo}`);

        try {
            // const response = await addAddress(JSON.stringify(formData))
            const response = isUpdate
                ? await updateAddress(formData.id, JSON.stringify(formData))
                : await addAddress(JSON.stringify(formData));
            console.log("response is", response.data['message'], response.status)

            if (response.status === 200) {
                console.log("address saved")
            }

        } catch (e) {
            console.log(" failed to add address")
            console.log(e)
        }
    }

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                {
                    isUpdate || mode === "edit" ? <div/> : <Button size={"lg"} className={"bg-blue-500 hover:bg-blue-700"} variant="default">Add new Address</Button>
                }
            </DialogTrigger>
            <DialogContent className="lg:max-w-[825px]">
                <DialogHeader>
                    <DialogTitle>{isUpdate ? "Edit Address" : "Add new Address"}</DialogTitle>
                    <DialogDescription>
                        Make changes to your address here. Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">

                    <div className={"flex flex-row justify-between gap-4"}>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                Name
                            </Label>
                            <DialogTextField
                                placeholder="name"
                                type={"text"}
                                name={"name"}
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                MobileNo
                            </Label>
                            <DialogTextField
                                placeholder="Mobile Number"
                                type={"text"}
                                name={"mobileNo"}
                                value={formData.mobileNo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={"flex flex-row justify-between gap-4"}>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                Pincode
                            </Label>
                            <DialogTextField
                                placeholder="Pincode"
                                type={"text"}
                                name={"pinCode"}
                                value={formData.pinCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                Locality
                            </Label>
                            <DialogTextField
                                placeholder="Locality"
                                type={"text"}
                                name={"locality"}
                                value={formData.locality}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={"flex flex-row justify-between gap-4"}>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                City
                            </Label>
                            <DialogTextField
                                placeholder="City"
                                type={"text"}
                                name={"city"}
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                State
                            </Label>
                            <DialogTextField
                                placeholder="State"
                                type={"text"}
                                name={"state"}
                                value={formData.state}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className={"flex flex-row justify-between gap-4"}>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                Landmark
                            </Label>
                            <DialogTextField
                                placeholder="Landmark"
                                type={"text"}
                                name={"landmark"}
                                value={formData.landmark}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-1 items-center gap-4">
                            <Label className="min-w-[80px] text-left">
                                Alternate Phone
                            </Label>
                            <DialogTextField
                                placeholder="Alternate Phone"
                                type={"text"}
                                name={"alternatePhoneNo"}
                                value={formData.alternatePhoneNo}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-row gap-4"}>
                        <Label className="min-w-[80px] text-left">
                            Area
                        </Label>
                        <Textarea
                            placeholder="Area"
                            name={"area"}
                            value={formData.area}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={"flex flex-row gap-4"}>
                        <Label className="min-w-[80px] text-left">
                            Address Type
                        </Label>
                        <AddressRadioGroup handleRadioChange={handleRadioChange} selectedValue={formData.addressType}/>
                    </div>

                </div>
                <DialogFooter>
                    <Button type="submit" className={"bg-blue-500 hover:bg-blue-600"} onClick={handleSubmit}>
                        {isUpdate ? "Save changes" : "Add Address"}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

const AddressRadioGroup = ({handleRadioChange, selectedValue}) => {
    return (
        <RadioGroup defaultValue={selectedValue} onValueChange={handleRadioChange}>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Home" id="r1" />
                <Label htmlFor="r1">Home</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Work" id="r2" />
                <Label htmlFor="r2">Work</Label>
            </div>
        </RadioGroup>
    )
}