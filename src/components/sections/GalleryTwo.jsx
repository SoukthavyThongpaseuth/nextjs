"use client";

import { motion } from "framer-motion";

const GalleryTwo = () => {
  return (
    <section className=" bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="md:flex m-5">
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="w-full h-full p-5 "
          >
            <img src="/images/9.jpg" alt="image description" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className=" w-full h-full p-5"
          >
            <img src="/images/10.jpg" alt="image description" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="w-full h-full p-5"
          >
            <img src="/images/11.jpg" alt="image description" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="w-full h-full p-5"
          >
            <img src="/images/12.jpg" alt="image description" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryTwo;
