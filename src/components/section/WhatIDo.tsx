"use client";

import React from "react";
import CustomContainer from "../custom/customContainer";
import ScrambleText from "../ScrambleText";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatIDo = () => {
  const { scrollYProgress } = useScroll();

  const xMove1 = useTransform(scrollYProgress, [0, 0.4, 1], [1000, 0, 1000]);
  const xMove2 = useTransform(scrollYProgress, [0, 0.4, 1], [1100, 0, 1100]);
  const xMove3 = useTransform(scrollYProgress, [0, 0.4, 1], [1200, 0, 1200]);
  const xMove4 = useTransform(scrollYProgress, [0, 0.4, 1], [1200, 0, 1200]);
  const xMove5 = useTransform(scrollYProgress, [0, 0.4, 1], [1300, 0, 1300]);
  const xMove6 = useTransform(scrollYProgress, [0, 0.4, 1], [1400, 0, 1400]);
  const xMove7 = useTransform(scrollYProgress, [0, 0.4, 1], [1500, 0, 1500]);
  const xMove8 = useTransform(scrollYProgress, [0, 0.4, 1], [1600, 0, 1600]);
  const xMove9 = useTransform(scrollYProgress, [0, 0.4, 1], [1700, 0, 1700]);
  const xMove10 = useTransform(scrollYProgress, [0, 0.4, 1], [1800, 0, 1800]);
  const xMove11 = useTransform(scrollYProgress, [0, 0.4, 1], [1900, 0, 1900]);

  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <section className="pb-[150px] relative overflow-hidden">
      <CustomContainer>
        <div>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold font-ubuntu text-[64px] lining-[74px]"
          >
            What I Do
          </motion.h1>
          <div className="pt-[30px]">
            <div className="flex items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mr-[10px]"
              >
                <Image
                  src="/vectorarrow.svg"
                  alt="arrow vector"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[30px] h-auto"
                />
              </motion.div>
              <h2 className="font-medium font-roboto text-[32px] leading-[48px]">
                <ScrambleText>Development</ScrambleText>
              </h2>
            </div>
            <motion.p
              className="max-w-[550px] text-[18px] leading-[165%] my-[15px]"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build websites in Webflow, React.js, Tailwind CSS, Sass, and
              Next.js to create responsive, powerful, and fully custom websites.
              With these tools, I offer advanced development capabilities
              alongside Webflow’s simple Content Editor, allowing your team to
              quickly and easily manage website content.
            </motion.p>
          </div>
          <div className="pt-[30px]">
            <div className="flex items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mr-[10px]"
              >
                <Image
                  src="/vectorarrow.svg"
                  alt="arrow vector"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[30px] h-auto"
                />
              </motion.div>
              <h2 className="font-medium font-roboto text-[32px] leading-[48px]">
                <ScrambleText>Design</ScrambleText>
              </h2>
            </div>
            <motion.p
              className="max-w-[550px] text-[18px] leading-[165%] my-[15px]"
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I design beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers’ trust and
              helps you do your business well. I make sure your website is up to
              that standard.
            </motion.p>
          </div>
        </div>
      </CustomContainer>
      <motion.div className="absolute right-[45%] top-[13%]" style={{ x: xMove11 }}>
        <Image
          src="/whatido/whatido10.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[22%] top-[28%]"
        style={{ x: xMove5 }}
      >
        <Image
          src="/whatido/whatido6.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[17%] top-[12%]"
        style={{ x: xMove6 }}
      >
        <Image
          src="/whatido/whatido12.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute right-[30%] top-[12%]"
        style={{ x: xMove7 }}
      >
        <Image
          src="/whatido/whatido11.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[39%] top-[25%]"
        style={{ x: xMove8 }}
      >
        <Image
          src="/whatido/whatido3.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[32%] top-[37%]"
        style={{ x: xMove9 }}
      >
        <Image
          src="/whatido/whatido4.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[45%] top-[50%]"
        style={{ x: xMove10 }}
      >
        <Image
          src="/whatido/whatido1.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[42%] top-[65%]"
        style={{ x: xMove1 }}
      >
        <Image
          src="/whatido/whatido9.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[38%] top-[55%]"
        style={{ x: xMove2 }}
      >
        <Image
          src="/whatido/whatido2.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[25%] top-[50%]"
        style={{ x: xMove3 }}
      >
        <Image
          src="/whatido/whatido5.svg"
          alt="hero svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto"
        />
      </motion.div>
      <motion.div
        className="absolute right-[20%] top-[65%]"
        style={{ x: xMove4 }}
      >
        <Image
          src="/whatido/whatido7.svg"
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

export default WhatIDo;