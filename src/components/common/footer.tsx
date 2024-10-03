import React from "react";
import CustomContainer from "../custom/customContainer";
import Image from "next/image";
import CustomLink from "../CustomLink";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="border-t-[2px] border-customBlack">
      <CustomContainer>
        <div className="py-5 sm:py-14 flex flex-col-reverse gap-4 sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="arrow vector"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-auto max-w-[100px]"
            />
            <div className="ml-2 tracking-[1px] sm:tracking-[2.5px]">
              <h6>Aliflikescoding</h6>
              <h6>© Copyright - 2024</h6>
            </div>
          </div>
          <div className="flex gap-3">
            <CustomLink link="https://github.com/aliflikescoding">
              <FaGithub />
            </CustomLink>
            <CustomLink link="https://www.linkedin.com/in/alifwibowo/">
              <FaLinkedinIn />
            </CustomLink>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Footer;
