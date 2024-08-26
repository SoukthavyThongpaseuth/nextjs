"use client";

import { motion } from "framer-motion";

const Lastpicture = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className=" bg-white items-center">
        <div className="flex justify-center">
          <div className="max-w-full md:max-w-[40%]">
            <motion.img
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="w-full h-full md:p-5"
              src="/images/20.jpg"
              alt="image description"
            />
          </div>
          <div className="max-w-full md:max-w-[40%]">
            <motion.img
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="w-full h-full md:p-5"
              src="/images/sit.jpg"
              alt="image description"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lastpicture;
