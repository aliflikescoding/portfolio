"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import { motion } from "framer-motion";
import ExperienceText from "../ExperienceText";
import ProjectCard from "../ProjectsCard";
import { experience, freeLanceProjects } from "@/app/data";

const Experience = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <section id="experience" className="mb-[150px]">
      <CustomContainer>
        <div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold font-ubuntu my-9 text-[48px] sm:text-[64px] lining-[74px]"
          >
            Experience
          </motion.h1>
          <div>
            {experience.map((exp) => (
              <ExperienceText
                key={exp.id}
                timeline={exp.timeline}
                position={exp.position}
                companyName={exp.companyName}
                companyLink={exp.companyLink}
                description={exp.description}
                used={exp.used}
              />
            ))}
          </div>
          <div className="">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold font-ubuntu text-[25px] sm:text-[38px] lining-[64px]"
            >
              Freelance Projects (comitioned work)
            </motion.h1>
            <div className="mt-8 flex flex-col gap-8">
              {freeLanceProjects.map((project) => (
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
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Experience;
