"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import UsePill from "./UsePill";
import Link from "next/link";

interface ExperienceTextProp {
  timeline: string;
  position: string;
  companyName: string;
  companyLink?: string;
  descBullets: string[];
  used: string[];
}

const ExperienceText: React.FC<ExperienceTextProp> = ({
  timeline,
  position,
  companyName,
  companyLink,
  descBullets,
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
          <h2 className="font-light text-[20px] sm:text-[24px] mb-[8px] capitalize">
            {timeline}
          </h2>
          <h2 className="font-light text-[20px] sm:text-[24px]">
            {position} -{" "}
            {companyLink ? (
              <Link className="underline" target="_" href={companyLink}>
                {companyName}
              </Link>
            ) : (
              <span>{companyName}</span>
            )}
          </h2>
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
          <ul className="list-disc">
            {descBullets.length > 0 &&
              descBullets.map((desc, index) => (
                <li key={index} className="pl-1 text-[15px] sm:text-[18px] max-w-[965px] text-indent-[-0.5rem]">
                  {desc}
                </li>
              ))}
          </ul>
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
