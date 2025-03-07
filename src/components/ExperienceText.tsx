"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import UsePill from "./UsePill";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface ExperienceTextProp {
  timeline: string;
  position: string;
  companyName: string;
  companyLink?: string;
  description: string;
  used: string[];
}

const ExperienceText: React.FC<ExperienceTextProp> = ({
  timeline,
  position,
  companyName,
  companyLink,
  description,
  used,
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex">
        <div>
          <Image
            src="/vectorarrow.svg"
            alt="arrow vector"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto"
          />
        </div>
        <div className="ml-[10px] sm:ml-[30px]">
          <h2 className="font-normal text-[20px] sm:text-[24px] mb-[8px] capitalize">
            {timeline}
          </h2>
          <h2 className="font-normal text-[25px] sm:text-[30px]">{position}</h2>
          {companyLink ? (
            <Link
              className="flex max-w-fit text-[15px] sm:text-[20px] items-center gap-1 group hover:text-customBlue relative"
              target="_blank"
              href={companyLink}
            >
              <p>{companyName}</p>
              <FaArrowRightLong className="group-hover:ml-2 transition-all duration-800 ease-in-out" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-customBlue transition-all duration-800 ease-in-out group-hover:w-full"></span>
            </Link>
          ) : (
            <span className="text-[20px]">{companyName}</span>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="opacity-0">
          <Image
            src="/vectorarrow.svg"
            alt="arrow vector"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto"
          />
        </div>
        <div className="ml-[30px] my-6">
          <p className="pl-1 font-normal opacity-75 text-[15px] sm:text-[18px] max-w-[965px] text-indent-[-0.5rem]">
            {description}
          </p>
          <div className="mt-[20px]">
            <div className="flex flex-wrap gap-[5px] my-[15px]">
              {used.length > 0 &&
                used.map((tech, index) => (
                  <UsePill text={`${tech}`} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceText;
