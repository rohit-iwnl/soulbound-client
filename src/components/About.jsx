import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="h-screen flex flex-col justify-center items-center snap-center bg-[#121212]">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl dark:text-white">
          About Us
        </h1>

        <p className="mt-4 text-center text-2xl text-gray-500 dark:text-gray-300">
          Meet the team members who built this
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { opacity: 0.2, scale: 0, y: -500 },
            }}
          >
            <img
              className="object-cover w-full rounded-lg h-96"
              src="/tej.jpg"
              alt=""
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Tejashwin U{" "}
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              UI/UX
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.7 }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { opacity: 0.2, scale: 0, y: -500 },
            }}
          >
            <img
              className="object-cover w-full rounded-lg h-96 "
              src="/Untitled.jpg"
              alt=""
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Kennith S{" "}
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Front-end Design{" "}
            </p>
          </motion.div>

          <motion.div
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { opacity: 0.2, scale: 0, y: -500 },
            }}
          >
            <img
              className="object-cover w-full rounded-lg h-96 "
              src="/rohit.jpg"
              alt=""
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Rohit M{" "}
            </h2>
            <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              Blockchain integration
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
