"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import Image from "next/image";
import ButtonComponent from "../contact-button";
import ScrambleText from "../ScrambleText";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <section className="py-[25vh]">
      <CustomContainer>
        <div>
          <div>
            <h1 className="font-medium uppercase font-ubuntu text-[48px] tracking-[6.24px] mb-[12px]">
              ALIFLIKES
              <span className="text-customBlue">
                <Typewriter
                  words={["Coding", "Designing", "Developing", "Repeat!"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  cursorColor="#282825"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>

          <div className="">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-[75px]"
            >
              <Image
                src="/vectorarrow.svg"
                alt="arrow vector"
                width="0"
                height="0"
                sizes="100vw"
                className="w-auto h-auto"
              />
            </motion.div>
            <div className="inline-block ml-[27px]">
              <h2 className="font-medium font-roboto font-normal text-[32px] leading-[48px]">
                <ScrambleText>
                  Frontend Developer and UI/UX designer.
                </ScrambleText>
              </h2>
              <motion.p
                className="max-w-[550px] text-[18px] leading-[165%] mb-[12px]"
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hi, my name is Alif Wibowo. I design and build beautiful
                websites for businesses around the globe. If you need a modern
                and powerful website, send me an email. If we are a good fit, I
                will give you a time and cost estimate.
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="ml-[98px] mt-[45px]"
            >
              <ButtonComponent type="primary">get in touch</ButtonComponent>
              <div className="ml-[35px] inline-block">
                <ButtonComponent type="secondary">get resume</ButtonComponent>
              </div>
            </motion.div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default Hero;
