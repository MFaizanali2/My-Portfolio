import React from "react";
import Title from "./Title";
import { motion } from "motion/react";
import { workData } from "./data";

const OurWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="My Project"
        desc="Showcasing my ability to create full-stack
         solutions with modern frontend and backend technologies."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="hover:scale-102 duration-500 transition-all cursor-pointer bg-white
             dark:bg-gray-900 rounded-xl p-4 shadow-lg"
          >
            <img src={work.icons} alt="" className="w-full rounded-xl" />

            <h3 className="mt-3 mb-4 text-lg font-semibold">{work.title}</h3>

            <div className="flex gap-4">
              <a
                href={work.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-[#5044E5] to-[#4d8cea]
                 text-white rounded-lg font-medium shadow-md hover:opacity-90 transition"
              >
                Preview
              </a>
              <a
                href={work.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-4 py-2 border-2 border-[#5044E5] text-[#5044E5]
                 rounded-lg font-medium shadow-md hover:bg-[#5044E5] hover:text-white transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
