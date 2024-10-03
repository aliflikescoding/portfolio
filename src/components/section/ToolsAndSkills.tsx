"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import { motion } from "framer-motion";
import SkillsOrTools from "../SkillOrTools";

const ToolsAndSkills = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <section className="py-[150px]">
      <CustomContainer>
        <div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold font-ubuntu text-[48px] sm:text-[64px] lining-[74px]"
          >
            Tools And Skills
          </motion.h1>
          <SkillsOrTools
            title="frontend"
            images={[
              "/frontend/reactLogo.svg",
              "/frontend/sassLogo.svg",
              "/frontend/tailwindLogo.svg",
              "/frontend/typescriptLogo.svg",
              "/frontend/javascriptLogo.svg",
              "/frontend/cssLogo.svg",
              "/frontend/htmlLogo.svg",
            ]}
          />
          <SkillsOrTools
            title="tools"
            images={[
              "tools/githubLogo.svg",
              "tools/gitLogo.svg",
              "tools/figmaLogo.svg",
              "tools/webflowLogo.svg",
            ]}
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default ToolsAndSkills;
