import React from "react";
import {
    Navbar,
    Typography,
} from "@material-tailwind/react";
import {NavList} from "@/app/molecule/navbar-component";
import {AlertDialogDemo, ShowToast} from "@/app/atoms/toast";
import { toast } from "sonner"


export const NavbarWithMegaMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="px-4 py-2">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    color={"black"}
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    Nthreads
                </Typography>
                <ShowToast/>
                <AlertDialogDemo/>

                <div className="hidden lg:block">
                    <NavList/>
                </div>

            </div>
        </Navbar>
    );
}

