import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {BellRinging, ArrowsOut} from "@/app/common/icons";
import {Bars4Icon} from "@heroicons/react/24/outline";
import {RoutePath} from "@/app/common/common";

export const ProfileMenu = ({userName}) => {
    return (
        <Menu>
            <MenuHandler>
                <div className={"flex flex-row gap-2 cursor-pointer"}>
                    <span className="font-semibold">{userName}</span>
                    <BellRinging size={16}/>
                </div>
            </MenuHandler>
            <MenuList>
                <MenuItem onClick={()=> {
                    window.location.href = RoutePath.MyAccount
                }} className="flex items-center gap-2">

                    <Typography variant="small" className="font-medium">
                        <div className={"flex items-center gap-2"}>
                            <BellRinging size={16}/>
                            <span>My Profile</span>
                        </div>
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <Typography variant="small" className="font-medium">
                        Edit Profile
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">


                    <Typography variant="small" className="font-medium">
                        Inbox
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">

                    <Typography variant="small" className="font-medium">
                        Help
                    </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2 ">
                    <Typography variant="small" className="font-medium">
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}


export function MenuDefault() {
    return (
        <Menu>
            <MenuHandler>
                <BellRinging size={16}/>
            </MenuHandler>
            <MenuList>
                <MenuItem onClick={() => {
                    console.log("menu 1 clicked")
                }}>Menu Item 1</MenuItem>
                <MenuItem onClick={() => {
                    console.log("menu 2 clicked")
                }}>Menu Item 2</MenuItem>
                <MenuItem onClick={() => {
                    console.log("menu 3 clicked")
                }}>Menu Item 3</MenuItem>
            </MenuList>
        </Menu>
    );
}