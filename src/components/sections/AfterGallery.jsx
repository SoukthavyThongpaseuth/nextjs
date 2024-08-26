"use client";

import { motion } from "framer-motion";

const AfterGallery = () => {
  return (
    <section>
      <div className=" bg-blue-900 p-10 items-center flex">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" md:m-10"
        >
          <div className="md:max-w-[50%] mx-auto flex flex-col justify-center">
            <div className="title">
              <h2 className=" text-yellow-500 text-4xl text-center italic font-extrabold ">
                Through the decades
              </h2>
            </div>
            <p className="text-center text-xl text-blue-290 pt-5">
              In the early 1980s, a new scholarship programme emerged to provide
              talented international students with the opportunity to further
              their education in the UK. This programme, which was announced by
              the Foreign Secretary Francis Pym in 1983, would become known as
              Chevening. Initially, the programme was funded for just three
              years, but 40 years and 57,000 alumni later, its legacy continues.
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-white w-auto hover:bg-blue-400 text-blue-900 font-bold mt-8 py-3 px-20 rounded-full mx-auto"
            >
              EXPLORE OUR HISTORY
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfterGallery;
