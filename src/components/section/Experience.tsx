"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import { motion } from "framer-motion";
import ExperienceText from "../ExperienceText";
import { experience, personalFreelance } from "@/app/data";

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
                descBullets={exp.descBullets}
                used={exp.used}
              />
            ))}
          </div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold font-ubuntu my-[12.5px] sm:my-[25px] text-[28px] sm:text-[32px] lining-[30px] sm:lining-[74px]"
          >
            Personal Freelance Experience
          </motion.h2>
          <div>
            {personalFreelance.map((exp) => (
              <ExperienceText
                key={exp.id}
                timeline={exp.timeline}
                position={exp.position}
                companyName={exp.companyName}
                companyLink={exp.companyLink}
                descBullets={exp.descBullets}
                used={exp.used}
              />
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Experience;
