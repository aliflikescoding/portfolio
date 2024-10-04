"use client";

import React from 'react'
import Link from 'next/link';

interface NavLinkProps {
  children: React.ReactNode;
  link: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, link }) => {

  return (
    <Link href={link} className="relative text-[20px] font-medium font-roboto leading-[175.7%] group">
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
    </Link>
  );
}

export default NavLink;
