import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Copyright 2025 © Portfolio - All Right Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.linkedin_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
