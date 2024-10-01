"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const CYCLES_PER_LETTER = 2;  // Number of cycles before settling on the correct letter
const SHUFFLE_TIME = 20;       // Time interval for scrambling characters
const CHARS = "!@#$%^&*():{};|,.<>/?"; // Characters used for scrambling

type Props = {
  children: string;           // The text to be scrambled and then revealed
};

const ScrambleText: React.FC<Props> = ({ children }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children;   // Original text
  const [text, setText] = useState(""); // State to hold the scrambled text
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
      scramble(); // Start scrambling when in view

      // Stop scrambling and set the final text after scrambling is done
      const timeout = setTimeout(() => {
        stopScramble();
      }, TARGET_TEXT.length * CYCLES_PER_LETTER * SHUFFLE_TIME);

      return () => clearTimeout(timeout); // Cleanup on unmount
    } else {
      stopScramble(); // Stop scrambling when out of view
      setText(""); // Reset text to blank if not in view
    }
  }, [inView]); // Re-run when inView changes

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT); // Set text to the final correct value
  };

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text || '!@#$gdfg%!as@#%!@'}</span> {/* Show 'Loading...' while scrambling */}
      </div>
    </motion.div>
  );
};

export default ScrambleText;
