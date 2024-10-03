import React from "react";
import CustomContainer from "../custom/customContainer";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";

const Header = () => {
  return (
    <section>
      <CustomContainer>
        <div className="py-[30px] flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-[170px] h-auto"
            />
          </Link>
          <div className="flex gap-[45px]">
            <NavLink link="#about">
              About
            </NavLink>
            <NavLink link="#experience">
              Experience
            </NavLink>
            <NavLink link="#projects">
              Selected Projects
            </NavLink>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Header;
