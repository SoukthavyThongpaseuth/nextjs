"use client";

import { motion } from "framer-motion";

const GalleryOne = () => {
  return (
    <section className=" bg-white">
      <motion.div className="grid-flow-col">
        <div className="md:flex m-5">
          <div className="w-full h-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 3 }}
              transition={{ duration: 2, delay: 0.3 }}
              className="w-full h-full p-5"
              src="/images/5.jpg"
              alt="image description"
            />
          </div>

          <div className="w-full h-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 3 }}
              transition={{ duration: 2, delay: 0.6 }}
              className=" w-full h-full p-5"
              src="/images/6.jpg"
              alt="image description"
            />
          </div>

          <div className="w-full h-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 3 }}
              transition={{ duration: 2, delay: 0.9 }}
              className=" w-full h-full p-5"
              src="/images/7.jpg"
              alt="image description"
            />
          </div>

          <div className="w-full h-full">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 3 }}
              transition={{ duration: 2, delay: 1.5 }}
              className=" hero-image w-full h-full p-5"
              src="/images/8.jpg"
              alt="image description"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryOne;
