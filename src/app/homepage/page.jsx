"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div>
      <div className=" bg-blue-900 p-10 flex justify-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="m-10"
        >
          <div className="md:max-w-full mx-auto flex flex-col justify-center">
            <div className="title">
              <h2 className="py-5 text-yellow-500 text-4xl text-center italic font-extrabold ">
                Yamamoto applications are open!
              </h2>
            </div>
            <p className="text-center text-lg text-blue-290 pt-5">
              We provide fully funded scholarships so that you can outpace your
              peers and return home with the skills, knowledge and network
              required to influence the change you want to see.
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-white hover:bg-green-600 text-blue-900 font-bold mt-8 py-3 px-10 rounded-full mx-auto"
            >
              APPLY TODAY
            </motion.button>
          </div>
        </motion.div>
      </div>

      <section>
        <div className=" bg-white p-5 items-center md:flex grid-flow-col">
          <div className=" my-5 mx-auto flex flex-col justify-center">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2
                  className=" text-yellow-600 
                text-5xl text-center 
                italic font-extrabold "
                >
                  meet our Cheveners
                </h2>
              </motion.div>

              {/* houp */}
              <div className="md:flex gap-10 m-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.3 }}
                  className="w-full h-full "
                >
                  <img
                    className="w-full h-full p-3"
                    src="/images/13.jpg"
                    alt="image description"
                  />
                  <div>
                    <div className="mt-5">
                      <a className=" text-blue-900 hover:text-red-600 text-3xl  font-extrabold ">
                        Confilct and stablility
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                  className="w-full h-full"
                >
                  <img
                    className="w-full h-full p-3"
                    src="/images/14.jpg"
                    alt="image description"
                  />
                  <div>
                    <div className="mt-5">
                      <a className=" text-blue-900 hover:text-red-600 text-3xl text-center font-extrabold ">
                        Art, culture, and media
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.9 }}
                  className="w-full h-full"
                >
                  <img
                    className="w-full h-full p-3"
                    src="/images/15.jpg"
                    alt="image description"
                  />
                  <div>
                    <div className="mt-5">
                      <a className=" text-blue-900 hover:text-red-600 text-3xl text-center font-extrabold">
                        Science, technology, innovation, and health
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
