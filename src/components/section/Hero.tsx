"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import Image from "next/image";
import ButtonComponent from "../contact-button";
import ScrambleText from "../ScrambleText";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Define the scroll-based translation for each image
  const xMove1 = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const xMove2 = useTransform(scrollYProgress, [0, 1], [0, 1100]);
  const xMove3 = useTransform(scrollYProgress, [0, 1], [0, 1200]);
  const xMove4 = useTransform(scrollYProgress, [0, 1], [0, 1300]);
  const xMove5 = useTransform(scrollYProgress, [0, 1], [0, 1400]);
  const xMove6 = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const xMove7 = useTransform(scrollYProgress, [0, 1], [0, 1600]);
  const xMove8 = useTransform(scrollYProgress, [0, 1], [0, 1700]);
  const xMove9 = useTransform(scrollYProgress, [0, 1], [0, 1800]);
  const xMove10 = useTransform(scrollYProgress, [0, 1], [0, 1900]);
  const xMove11 = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <section className="py-[25vh] relative overflow-hidden">
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
              className="ml-[98px] mt-[45px] flex items-center"
            >
              <ButtonComponent type="primary">get in touch</ButtonComponent>
              <div className="ml-[35px] inline-block">
                <ButtonComponent type="secondary">get resume</ButtonComponent>
              </div>
            </motion.div>
          </div>
        </div>
      </CustomContainer>

      {/* Hero SVGs with scroll-based movement */}
      <motion.div
        style={{ x: xMove1 }}
        className="absolute right-[30%] top-[14%]"
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg1.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove2 }}
        className="absolute right-[29%] top-[30%]"
        initial={{ x: 1100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg6.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove3 }}
        className="absolute right-[34%] top-[40%]"
        initial={{ x: 1200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg8.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove4 }}
        className="absolute right-[40%] top-[52%]"
        initial={{ x: 1300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg5.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove5 }}
        className="absolute right-[27%] top-[58%]"
        initial={{ x: 1400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg9.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>

      <motion.div
        style={{ x: xMove6 }}
        className="absolute right-[35%] top-[65%]"
        initial={{ x: 1500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg4.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove7 }}
        className="absolute right-[15%] top-[60%]"
        initial={{ x: 1700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg10.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove8 }}
        className="absolute right-[20%] top-[17%]"
        initial={{ x: 1800, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg7.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove9 }}
        className="absolute right-[20%] top-[40%]"
        initial={{ x: 1800, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg11.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove10 }}
        className="absolute right-[45%] top-[10%]"
        initial={{ x: 1900, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg2.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        style={{ x: xMove11 }}
        className="absolute right-[40%] top-[20%]"
        initial={{ x: 2000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/hero/herosvg3.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
