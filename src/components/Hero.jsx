import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 
    text-center overflow-hidden w-full text-gray-700 dark:text-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-6xl sm:text-7xl md:text-8xl xl:text-[96px] font-bold xl:leading-[110px] max-w-5xl"
      >
        Hi, I’m
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-semibold xl:leading-[90px] max-w-5xl"
      >
        Muhammad{" "}
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          Faizan Ali
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
        className="text-base sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-white/80 max-w-3xl pb-6"
      >
        I’m a passionate{" "}
        <span className="text-[#5044E5]">MERN Stack Developer</span>, crafting
        scalable full-stack applications and turning innovative ideas into
        powerful digital experiences.
      </motion.p>

      <div className="flex flex-wrap gap-4">
        <motion.a
          href="/Muhammad-Faizan-Ali-CV.pdf"
          download
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
          className="inline-block bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white
           px-6 py-3 rounded-2xl shadow-lg hover:opacity-90 text-lg font-semibold"
        >
          Download CV
        </motion.a>

        <motion.a
          href="https://github.com/MFaizanali2"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          viewport={{ once: true }}
          className="inline-block border-2 border-[#5044E5] text-[#5044E5] px-6 py-3 rounded-2xl
           font-semibold hover:bg-[#5044E5] hover:text-white transition"
        >
          GitHub
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/m-faizan-ali-3a52a32a6/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          viewport={{ once: true }}
          className="inline-block border-2 border-[#4d8cea] text-[#4d8cea] px-6 py-3 rounded-2xl
           font-semibold hover:bg-[#4d8cea] hover:text-white transition"
        >
          LinkedIn
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
