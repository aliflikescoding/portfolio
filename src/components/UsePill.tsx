"use client"; // This tells Next.js it's a client-side component

import React from "react";

interface UsePillProp {
  text: string;
}

const UsePill: React.FC<UsePillProp> = ({text}) => {
  return (
    <div className="bg-customRed text-[15px] sm:text-[18px] border-2 border-customBlack capitalize text-customBlack rounded-full px-[5px] py-[2.5px] sm:px-[10px] sm:py-[5px] inline-block">
      {text}
    </div>
  )
}

export default UsePill;
