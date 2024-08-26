"use client";

import { motion } from "framer-motion";

const AfterGallerytwo = () => {
  return (
    <section>
      <div className=" bg-blue-900 p-10">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:m-10"
        >
          <div className="md:max-w-[50%] mx-auto flex flex-col">
            <div>
              <h2 className=" text-yellow-500 text-4xl text-center italic font-extrabold ">
                Photos from the archive
              </h2>
            </div>
            <p className="text-center text-xl text-blue-290 pt-5">
              A lot has changed over the past 40 years, but at the heart of it
              all, Chevening commitment to provide exceptional individuals with
              the opportunity to reach their career goals and make a positive
              impact has remained the same. From 1983 to 2023, here are some of
              the faces that have made Chevening what it is.
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-white w-auto hover:bg-blue-400 
              text-blue-900 font-bold mt-8 py-3 px-20 
              rounded-full mx-auto"
            >
              EXPLORE OUR GALLERY
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterGallerytwo;
