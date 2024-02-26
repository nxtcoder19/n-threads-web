"use client";
import { Button } from "../atoms/button";
import { Textfield } from "../atoms/textfield";
import { BiSearchAlt2 } from "react-icons/bi";
import {VscAccount} from "react-icons/vsc"
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 border-2">
      <div className="place-self-center">
        <span className="text-2xl text-sky">N-Threads</span>
      </div>
      <div>
        <Textfield
          // label={"Enter your product details"}
          placeholder={"Enter your product details123"}
          icon={<BiSearchAlt2 />}
        ></Textfield>
      </div>
      <div className="place-self-center">
        <Link href={"/route/login"}>
            <Button
                icon={<VscAccount/>}
                label={"sign in"}
            >
            </Button>
        </Link>
      </div>
    </div>
  );
};
