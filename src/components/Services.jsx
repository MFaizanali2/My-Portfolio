import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const serviceData = [
    {
      title: "Frontend",
      description:
        "We craft modern, responsive frontends using React, Next.js, and Tailwind to deliver sleek, user-friendly experiences.",
      icons: assets.ads_icon,
    },
    {
      title: "Backend",
      description:
       "We build scalable backends with Node.js, Express, MongoDB, and more — ensuring speed, security, and reliability.",
      icons: assets.marketing_icon,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ straggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />
      <Title
        title="How can we help?"
        desc="From frontend to backend, we build scalable
         MERN applications with intuitive design and business-focused solutions."
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
