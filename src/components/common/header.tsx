import React from "react";
import CustomContainer from "../custom/customContainer";
import Link from "next/link";
import NavLink from "../NavLink";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaInfoCircle } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { FaBox } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <section className="fixed top-0 z-50 bg-customCream border-b-2 border-customBlack w-[100%]">
      <CustomContainer>
        <div className="py-[30px] flex justify-between items-center ">
          <Link href="/">
            <h1 className="font-medium uppercase font-ubuntu text-2xl  sm:text-3xl tracking-[6.24px]">
              Alif Wibowo
            </h1>
          </Link>
          <div className="hidden lg:flex gap-[45px]">
            <NavLink link="/#about">About</NavLink>
            <NavLink link="/#experience">Experience</NavLink>
            <NavLink link="/#projects">Featured Projects</NavLink>
          </div>
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger>
                <div className="text-4xl font-thin">
                  <GiHamburgerMenu />
                </div>
              </SheetTrigger>
              <SheetContent side="top" className="bg-customCream">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/">
                      <h1 className="font-medium uppercase font-ubuntu text-xl tracking-[6.24px]">
                        Alif Wibowo
                      </h1>
                    </Link>
                  </SheetTitle>
                  <div className="flex flex-col p-[7.5vh] gap-5 mx-auto">
                    <Link
                      href="/#about"
                      className="flex items-center text-xl font-medium shadow-[7px_7px_0_rgb(0,0,0)] p-3 bg-customWhite rounded-3xl border-2 border-customBlack"
                    >
                      <FaInfoCircle className="mr-[5px]" /> About
                    </Link>
                    <Link
                      href="/#experience"
                      className="flex items-center text-xl font-medium shadow-[7px_7px_0_rgb(0,0,0)] p-3 bg-customWhite rounded-3xl border-2 border-customBlack"
                    >
                      <LuClipboardList className="mr-[5px]" /> Experience
                    </Link>
                    <Link
                      href="/#projects"
                      className="flex items-center text-xl font-medium shadow-[7px_7px_0_rgb(0,0,0)] p-3 bg-customWhite rounded-3xl border-2 border-customBlack"
                    >
                      <FaBox className="mr-[5px]" /> Featured Projects
                    </Link>
                  </div>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Header;
