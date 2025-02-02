import React from "react";
import Image from "next/image";
import ScrambleText from "./ScrambleText";
import { motion } from "framer-motion";

interface SkillsOrToolsProps {
  title: string;
  images: string[];
}

const SkillsOrTools: React.FC<SkillsOrToolsProps> = ({ title, images }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initially hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  return (
    <>
      <h4 className="font-meidum text-[32px] mt-[30px] capitalize">
        <ScrambleText>{title}</ScrambleText>
      </h4>
      <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap pt-[30px] items-center gap-[30px]"
        >
          <Image
            src="/vectorarrow.svg"
            alt="arrow vector"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-auto hidden lg:block"
          />
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`} 
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto max-w-[70px] h-auto"
            />
          ))}
        </motion.div>
    </>
  );
};

export default SkillsOrTools;
