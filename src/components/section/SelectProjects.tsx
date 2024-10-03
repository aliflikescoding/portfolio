"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectsCard";
import ButtonComponent from "../contact-button";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { selectedProjects } from "@/app/data";
import Link from "next/link";

const SelectProjects = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section>
      <CustomContainer>
        <div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold font-ubuntu text-[64px] lining-[74px]"
          >
            Selected Projects
          </motion.h1>
          <div className="mt-8 flex flex-col gap-8">
            {selectedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                used={project.used}
                description={project.description}
                liveLink={project.liveLink}
                codeLink={project.codeLink}
                slugLink={project.slugLink}
                imageLink={project.imageLink}
              />
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center py-10"
          >
            <div className="ml-4">
              <Link href="https://github.com/aliflikescoding" target="_">
                <ButtonComponent type="secondary">
                  View Github <FaGithub className="inline-block ml-[5px]" />
                </ButtonComponent>
              </Link>
            </div>
          </motion.div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default SelectProjects;
