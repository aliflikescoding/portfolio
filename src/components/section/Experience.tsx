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
    <section className="mb-[150px]">
      <CustomContainer>
        <div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold font-ubuntu text-[64px] lining-[74px]"
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
            className="font-bold font-ubuntu my-[25px] text-[32px] lining-[74px]"
          >
            Personal Project Experience
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
