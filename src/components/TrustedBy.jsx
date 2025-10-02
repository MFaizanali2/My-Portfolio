import React from "react";
import { skills_logos } from "../assets/assets";
import { motion } from "motion/react";

const TrustedBy = () => {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center px-4 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80"
    >
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="font-semibold text-6xl"
      >
        My Skills
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-wrap gap-10 m-4"
      >
        {skills_logos.map((logo, index) => (
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            key={index}
            src={logo}
            alt="Skill Logo"
            className="
        w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 object-contain
         rounded-2xl shadow-md dark:drop-shadow-xl transition-transform duration-300 hover:scale-110
      "
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
