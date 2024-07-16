"use client"
import classNames from "classnames";
import React from "react";
import { useState } from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export const Textfield = ({ label, placeholder, icon }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className={"flex flex-col gap-1"}>
      <label
        className={classNames("text-sm", "font-semibold", {
          "text-blue-500": focused,
          "text-gray-500": !focused,
        })}
      >
        {label}
      </label>
      <div
        className={classNames("flex border rounded-md max-w justify-between", {
          "outline-blue-500 outline outline-2": focused,
          "border-gray-200": !focused,
        })}
      >
        <input
          onFocus={() => {
            console.log("focused");
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholder={placeholder}
          className={classNames(
            "text-gray-200 outline-none focus:border-blue-500 w-full",
            "text-base",
            "px-4",
            "py-2.5",
            "rounded-md"
          )}
        />

        <div
          className={classNames("place-self-center px-4", {
            "text-gray-200": !focused,
            "text-blue-500": focused,
          })}
        >
          {icon && icon}
          {/* {icon && <icon color={focused ? "blue" : "red"} />} */}
        </div>
      </div>
    </div>
  );
};

export const AuthTextField = ({ placeholder, type, name, onChange, disabled, value}) => {
    return <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        disabled={disabled}
        value={value}
    />
}

export const DialogTextField = ({ placeholder, type, name, onChange, disabled, value}) => {
    return (
        <input
            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 col-span-3"
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            disabled={disabled}
            value={value}
        />
    )
}