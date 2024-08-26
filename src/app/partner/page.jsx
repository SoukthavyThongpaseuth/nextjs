"use client";

import React from "react";
import { motion } from "framer-motion";

function BlogPage() {
  return (
    <main>
      <div className="bg-slate-300">
        <div className="bg-sky-950 pt-10 ">
          <div className="bg-sky-950 max-w-[70%] mx-auto ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-slate-300 pt-10 flex-col text-3xl text-blue-900 font-extrabold px-10"
            >
              <h1>Partner with us</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-slate-300 pt-8 pb-8 px-10"
            >
              <p className="text-xl text-blue-900 font-semi-bold">
                The Chevening community extends to all corners of the globe.
                Here is the latest news on what is going on in the Chevening
                network, and blogs from members of our community.
              </p>
            </motion.div>
          </div>
        </div>

        <section>
          <div className="bg-slate-300">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white md:flex-row flex-col gap-4 md:gap-0 flex justify-between max-w-[70%] py-8 mx-auto"
            >
              <div className=" px-10">
                <a
                  href="#"
                  className="text-blue-900 font-extrabold text-3xl hover:text-red-700"
                >
                  Experience the magic: Life at the University of St Andrews
                </a>
                <div className="pt-5">
                  <p href="#" className="text-blue-900 font-semibold ">
                    2 August 2024
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-blue-950 ">
                    Wondering where a Chevening Scholarship could take you? Lina
                    Tjindra reflects on what it was like to complete her master
                    at the University of Dundee and all that she has achieved
                    since.
                  </p>
                </div>
                <div className="text-red-700 pt-5 text-lg underline font-extrabold hover:text-blue-950">
                  <a href="#">Read full article</a>
                </div>
              </div>
              <div className=" max-w-full md:max-w-[50%]">
                <motion.img
                  initial={{ opacity: 0, x: 200 }}
                  // animate={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="object-contain w-full h-full px-10"
                  src="/images/12.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* letter */}
        <section>
          <div className="mt-5 bg-white">
            <div className="max-w-[70%] mx-auto text-4xl font-extrabold text-yellow-600 text-center bg-white">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, delay: 1 }}
                transition={{ duration: 1 }}
                className="py-6 italic"
              >
                Transform Lives Through education
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="pt-3 "
              >
                <p className="font-semibold text-blue-900 text-xl ">
                  The benefits of partnering with Chevening
                </p>
              </motion.div>
            </div>

            {/* Houp */}
            <div className="mt-5">
              <div className="flex justify-center max-w-[70%] mx-auto grid-flow-col">
                <div className="p-5 flex justify-between gap-5">
                  <div className=" max-w-[25%]">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                      className="mx-auto size-24"
                      src="/images/world1.png"
                      alt="1"
                    />

                    <div className=" pt-5 text-center text-black">
                      <p>
                        Change lives: Provide opportunities for exceptional
                        individuals from over 160 countries and territories to
                        realise their potential.
                      </p>
                    </div>
                  </div>
                  <div className=" max-w-[25%]">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                      className="mx-auto size-24"
                      src="/images/world2.png"
                      alt="1"
                    />

                    <div className=" pt-5 text-center text-black">
                      <p>
                        Drive positive change: Sponsor scholars to develop the
                        skills that will enable them to make an impact in their
                        home countries and beyond.
                      </p>
                    </div>
                  </div>
                  <div className=" max-w-[25%]">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                      className="mx-auto size-24"
                      src="/images/world3.png"
                      alt="1"
                    />

                    <div className=" pt-5 text-center text-black">
                      <p>
                        Connect with global leaders: Engage with our alumni
                        network and work together to create impact.
                      </p>
                    </div>
                  </div>
                  <div className=" max-w-[25%]">
                    <motion.img
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={(e) => {}}
                      onHoverEnd={(e) => {}}
                      className="mx-auto size-24"
                      src="/images/world4.png"
                      alt="1"
                    />

                    <div className=" pt-5 text-center text-black">
                      <p>
                        Support your strategic goals: Fund particular subject
                        areas to aid prosperity in your priority markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* blue bg */}
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
                The impact of your investment
              </h2>
            </div>
            <p className="text-center text-lg text-blue-290 pt-5">
              Find out more about the impact of your investment
            </p>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="bg-white hover:bg-blue-400 text-blue-900 font-bold mt-8 py-3 px-10 rounded-full mx-auto"
            >
              HOW WILL YOUR INVESTMENT MAKE A DIFFERENCE?
            </motion.button>
          </div>
        </motion.div>
      </div>

      <section>
        <div className=" bg-white p-5 items-center md:flex grid-flow-col">
          <div className=" mx-auto flex flex-col justify-center">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2
                  className=" text-yellow-600 py-5 
                text-4xl text-center 
                italic font-extrabold "
                >
                  Learn more about partnering with Chevening
                </h2>
              </motion.div>

              {/* houp after caption */}
              <div className="md:flex gap-10 m-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.3 }}
                  className="w-full h-full "
                >
                  <motion.img
                    className="w-full h-full p-3"
                    src="/images/13.jpg"
                    alt="image description"
                  />
                  <div>
                    <div>
                      <h2 className=" text-blue-900  text-3xl text-center font-extrabold pt-5 ">
                        WHO CAN PARTNER WITH US?
                      </h2>
                    </div>
                    <p className="text-center text-lg text-black pt-3">
                      Find out about who can partner with us
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                  className="w-full h-full"
                >
                  <motion.img
                    className="w-full h-full p-3"
                    src="/images/14.jpg"
                    alt="image description"
                  />
                  <div>
                    <div>
                      <h2 className=" text-blue-900  text-3xl text-center font-extrabold pt-5 ">
                        HOW WILL YOUR INVESTMENT MAKE A DIFFERENCE?
                      </h2>
                    </div>
                    <p className="text-center text-lg text-black pt-3">
                      Find out more about your investment
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.9 }}
                  className="w-full h-full"
                >
                  <motion.img
                    className="w-full h-full p-3"
                    src="/images/15.jpg"
                    alt="image description"
                  />
                  <div>
                    <div>
                      <h2 className=" text-blue-900  text-3xl text-center font-extrabold pt-5 ">
                        OUR CURRENT PARTNERS
                      </h2>
                    </div>
                    <p className="text-center text-lg text-black pt-3">
                      See our list of current partners
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
