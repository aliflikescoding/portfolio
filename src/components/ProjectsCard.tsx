"use client";

import React, { useState } from "react";
import ButtonComponent from "./contact-button";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import UsePill from "./UsePill";
import Link from "next/link";

interface ProjectCardProps {
  title?: string;
  used?: string[];
  description?: string;
  liveLink?: string;
  codeLink?: string;
  slugLink?: string;
  imageLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  used = [],
  description = "",
  liveLink,
  codeLink,
  imageLink,
}) => {
  const [showFull, setShowFull] = useState(false);
  const shortDescription = description.slice(0, 100);
  const isLong = description.length > 100;

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div
        className="
        p-5
        sm:px-10 
        sm:py-8
        rounded-3xl 
        shadow-[7px_7px_0_rgb(0,0,0)] 
        transition-all 
        capitalize
        bg-customYellow
        border-2
        border-customBlack
        flex
        lg:flex-row
        flex-col-reverse
        items-center
        "
      >
        <div className="lg:max-w-[50%]">
          <h4 className="text-[28px] sm:text-[32px] font-medium">{title}</h4>
          <div className="flex flex-wrap gap-[5px] my-[15px]">
            {used.length > 0 &&
              used.map((tech, index) => (
                <UsePill text={`${tech}`} key={index} />
              ))}
          </div>
          <p className="max-w-[550px] text-[15px] sm:text-[18px] leading-[165%] mb-[10px]">
            {showFull ? description : shortDescription}
            {isLong && !showFull && "..."}
          </p>
          {isLong && (
            <button
              className="font-ubuntu text-xl underline mb-[25px]"
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? "Read less" : "Read more"}
            </button>
          )}
          <div className="flex sm:flex-row flex-col gap-[15px] items-center">
            <Link href={liveLink || "#"} target="_blank">
              <ButtonComponent type="primary">
                View Live{" "}
                <FaExternalLinkAlt className="inline-block ml-[5px]" />
              </ButtonComponent>
            </Link>
            <Link href={codeLink || "#"} target="_blank">
              <ButtonComponent type="secondary">
                View Code <FaGithub className="inline-block ml-[5px]" />
              </ButtonComponent>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-[50%] lg:ml-[15px] relative flex items-center justify-center">
          <div className="relative group ">
            <Image
              src={`${imageLink}`}
              alt="Project Image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto rounded-3xl h-auto border-2 border-customBlack"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
