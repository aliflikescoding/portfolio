"use client";

import Layout from "@/components/Layout";
import CustomContainer from "@/components/custom/customContainer";
import ProjectCard from "@/components/ProjectsCard";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { freeLanceProjects, personalOrCourse } from "../data";

export default function Projects() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <section className="">
        <CustomContainer>
          <div className="py-[15vh] sm:py-[20vh]">
            <div className="flex justify-start pt-[30px] sm:pt-[45px]">
            <Link
                  className="
                  p-2
                  text-customBlack 
                  bg-customWhite
                  rounded-full 
                  font-semibold 
                  text-4xl
                  shadow-[4px_4px_0_rgb(0,0,0)] 
                  transition-all 
                  hover:shadow-none 
                  hover:translate-x-1
                  hover:translate-y-1
                  active:translate-x-1
                  active:translate-y-1
                  active:shadow-none
                  flex
                  justify-center
                  items-center
                  border-2
                border-customBlack font-roboto"
                  href="/"
                >
                  <FaHome className="mr-[10px]" /> Home
                </Link>
            </div>
            <div className="pb-[30px] sm:pb-[45px]">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-bold font-ubuntu text-[48px] sm:text-[48px] lining-[64px]"
              >
                Freelance Projects
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
            <div className="py-[30px] sm:py-[45px]">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-bold font-ubuntu text-[48px] sm:text-[48px] lining-[64px]"
              >
                Personal or Course Projects
              </motion.h1>
              <div className="mt-8 flex flex-col gap-8">
                {personalOrCourse.map((project) => (
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
    </Layout>
  );
}
