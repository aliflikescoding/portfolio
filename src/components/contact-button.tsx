"use client"; // This tells Next.js it's a client-side component

import React from "react";

interface ButtonComponentProp {
  type: "primary" | "secondary";
  children?: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProp> = ({type, children}) => {
  return (
    <button 
    className={`
    font-roboto
    capitalize
    text-lg
    px-6 
    py-3 
    text-customWhite 
    rounded-full 
    font-semibold 
    text-[16px]
    shadow-[7px_7px_0_rgb(0,0,0)] 
    transition-all 
    hover:shadow-none 
    hover:translate-x-2 
    hover:translate-y-2 
    active:translate-x-2 
    active:translate-y-2 
    active:shadow-none
    flex
    justify-center
    items-center
    border-2
    border-customBlack
    ${type === "primary" ? "bg-customBlue" : "bg-customPink"}
    `}>
      {children}
    </button>
  )
}

export default ButtonComponent;
