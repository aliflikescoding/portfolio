import React from "react";
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
  description,
  liveLink,
  codeLink,
  imageLink,
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
      transition={{ duration: 0.6, delay: 0.3 }}
      className="cursor-pointer"
    >
      <div
        className="
        px-10 
        py-8
        rounded-3xl 
        shadow-[7px_7px_0_rgb(0,0,0)] 
        transition-all 
        hover:shadow-none 
        hover:translate-x-2 
        hover:translate-y-2
        active:translate-x-2 
        active:translate-y-2 
        active:shadow-none
        capitalize
        bg-customYellow
        flex
        "
      >
        <div className="max-w-[50%]">
          <h4 className="text-[32px] font-medium">{title}</h4>
          <div className="flex gap-[5px] my-[15px]">
            {used.length > 0 &&
              used.map((tech, index) => <UsePill text={`${tech}`} key={index} />)}
          </div>
          <p className="max-w-[550px] text-[18px] leading-[165%] mb-[25px]">
            {description}
          </p>
          <div className="flex">
            <Link href={liveLink || "#"} target="_blank">
              <ButtonComponent type="primary">
                View Live{" "}
                <FaExternalLinkAlt className="inline-block ml-[5px]" />
              </ButtonComponent>
            </Link>
            <div className="inline-block ml-[15px]">
              <Link href={codeLink || "#"} target="_blank">
                <ButtonComponent type="secondary">
                  View Code <FaGithub className="inline-block ml-[5px]" />
                </ButtonComponent>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[50%] ml-[15px] relative flex items-center justify-center">
          <div className="relative group">
            <Image
              src={`${imageLink}`}
              alt="Project Image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto rounded-3xl h-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
