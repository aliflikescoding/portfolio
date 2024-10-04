"use client";

import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="flex justify-center items-center py-[45vh] flex-col text-center px-[10px]">
      <h1 className="text-5xl font-light mb-[10px]">404 not found</h1>
      <h1 className="text-xl sm:text-3xl font-light">
        due to various reasons this page does not exist please go back to the 
        <span> </span> {/* Adding space here */}
        <span>
          <Link className="text-customBlue border-b-2 border-customBlue" href="/">
            Home
          </Link>
        </span>{" "}
        Page
      </h1>
    </div>
  );
}
