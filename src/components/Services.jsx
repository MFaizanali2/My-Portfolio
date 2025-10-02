import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import { serviceData } from "./data";

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ straggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="service"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="My Services"
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
