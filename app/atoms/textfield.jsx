"use client"
import classNames from "classnames";
import React from "react";
import { useState } from "react";

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

export const AuthTextField = ({ placeholder, type, name, onChange}) => {
    return <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
    />
}