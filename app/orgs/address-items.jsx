import {Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";
import {BellRinging} from "@/app/common/icons";
import {useState} from "react";
import {DeleteDialog} from "@/app/molecule/dialog";
import {useApi} from "@/app/api/api-provider";
import {HandleAddress} from "@/app/route/my-account/component/handle-address";

export const AddressItems = ({addressItems, addressItemData}) => {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [addressDialogOpen, setAddressDialogOpen] = useState(false);
    const [selectedAddressItemId, setSelectedAddressItemId] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [initialData, setInitialData] = useState(null);

    const {addressApi} = useApi()
    const {deleteAddress} = addressApi;

    const handleAction = (action, addressItemId, addressItemData) => {
        switch (action) {
            case 'Edit':
                openEditDialog(addressItemId, addressItemData);
                setIsUpdate(true);
                setSelectedAddressItemId(addressItemId);
                setInitialData(addressItemData);
                setAddressDialogOpen(true);
                break;
            case 'Delete':
                setSelectedAddressItemId(addressItemId);
                setDialogOpen(true);
                break;
            default:
                console.log('Unknown action:', action);
        }
    };

    const handleDelete = async () => {
        console.log('Delete clicked for', selectedAddressItemId);
        try {
            const response = await deleteAddress(selectedAddressItemId)
            console.log("response is", response.data['message'], response.status)

            if (response.status === 200) {
                console.log("address deleted")
                setDialogOpen(false);
            }
        } catch (e) {
            console.log("delete address failed")
            console.log(e)
        }
        setDialogOpen(false);
    };

    const ExtraButton = ({ addressItemId, addressItemData }) => {
        const options = [
            {
                id: "Edit",
                label: 'Edit',
                icon: <BellRinging size={16} />,
                action: 'Edit'
            },
            {
                id: "Delete",
                label: 'Delete',
                icon: <BellRinging size={16} />,
                action: 'Delete'
            },
        ];

        return (
            <Menu>
                <MenuHandler>
                    <BellRinging size={16} />
                </MenuHandler>
                <MenuList>
                    {options.map((option) => (
                        <MenuItem key={option.id} onClick={() => handleAction(option.action, addressItemId, addressItemData)}>
                            <div className="flex items-center gap-2">
                                {option.icon}
                                <span>{option.label}</span>
                            </div>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        );
    };

    const openEditDialog = (addressItemId, addressItemData) => {
        // Implement the logic to open the edit dialog with the address item data
        console.log('Edit clicked for', addressItemId, addressItemData);
    };

    return (
        <div className={"flex flex-col gap-4 border p-4"}>
            {addressItems?.map((addressItemId)=> {
                return (
                    <div key={addressItemId} className={"border-b-2 border-gray-200 py-4 gap-4"}>
                        <div className={"flex justify-between"}>
                            <div>
                                {addressItemData[addressItemId].addressType}
                            </div>
                            <ExtraButton addressItemId={addressItemId} addressItemData={addressItemData[addressItemId]}/>
                        </div>
                        <div className={"font-semibold text-sm py-4"}>
                            <span>{addressItemData[addressItemId].name}</span>
                            <span className={"px-4"}>{addressItemData[addressItemId].mobileNo}</span>
                        </div>
                        <div className={"text-sm text-gray-500 py-1"}>
                            {`${addressItemData[addressItemId].area}, ${addressItemData[addressItemId].locality} ,${addressItemData[addressItemId].state}- ${addressItemData[addressItemId].pinCode}`}
                        </div>
                    </div>
                )
            })}
            <DeleteDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                onDelete={handleDelete}
            />
            <HandleAddress
                isUpdate={isUpdate}
                mode={"edit"}
                initialData={initialData}
                dialogOpen={addressDialogOpen}
                setDialogOpen={setAddressDialogOpen}
            />
        </div>
    )
}

