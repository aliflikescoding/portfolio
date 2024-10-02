"use client"; // This tells Next.js it's a client-side component

import React from "react";

interface UsePillProp {
  text: string;
}

const UsePill: React.FC<UsePillProp> = ({text}) => {
  return (
    <div className="bg-customRed capitalize text-customWhite rounded-full px-[10px] py-[5px] inline-block">
      {text}
    </div>
  )
}

export default UsePill;