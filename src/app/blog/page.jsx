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
              <h1>News & Blogs</h1>
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
                  src="/images/4.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white md:flex-row flex-col gap-4 md:gap-0 flex justify-between max-w-[70%] py-8 mx-auto"
            >
              <div className=" px-10">
                <a
                  href="#"
                  className="text-blue-900 font-extrabold text-3xl hover:text-red-700"
                >
                  Life after Chevening at the University of Dundee
                </a>
                <div className="pt-5">
                  <p href="#" className="text-blue-900 font-semibold ">
                    2 August 2024
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-blue-950 ">
                    Wondering where a Chevening Scholarship could take you? Lina
                    Tjindra reflects on what it was like to complete her
                    master’s at the University of Dundee and all that she has
                    achieved since.
                  </p>
                </div>
                <div className="text-red-700 pt-5 text-lg underline font-extrabold hover:text-blue-950">
                  <a href="#">Read full article</a>
                </div>
              </div>
              <div className=" max-w-full md:max-w-[50%]">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="object-contain w-full h-full px-10"
                  src="/images/5.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white md:flex-row flex-col gap-4 md:gap-0 flex justify-between max-w-[70%] py-8 mx-auto"
            >
              <div className=" px-10">
                <a
                  href="#"
                  className="text-blue-900 font-extrabold text-3xl hover:text-red-700"
                >
                  {`‘What a rollercoaster ride Chevening has been!’`}
                </a>
                <div className="pt-5">
                  <p href="#" className="text-blue-900 font-semibold ">
                    2 August 2024
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-blue-950 ">
                    {` For our current cohort of scholars, their time in the UK is
                    coming to an end, but the memories they've made will last
                    forever. Chevening Scholar and Social Media`}
                  </p>
                </div>
                <div className="text-red-700 pt-5 text-lg underline font-extrabold hover:text-blue-950">
                  <a href="#">Read full article</a>
                </div>
              </div>
              <div className=" max-w-full md:max-w-[50%]">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="object-contain w-full h-full px-10"
                  src="/images/6.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white md:flex-row flex-col gap-4 md:gap-0 flex justify-between max-w-[70%] py-8 mx-auto"
            >
              <div className=" px-10">
                <a
                  href="#"
                  className="text-blue-900 font-extrabold text-3xl hover:text-red-700"
                >
                  {` ‘My journey as a postgraduate student at the University of
                  Hull’`}
                </a>
                <div className="pt-5">
                  <p href="#" className="text-blue-900 font-semibold ">
                    2 August 2024
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-blue-950 ">
                    Chevening Scholar Dr Daliwa Joseph Bainamndi shares his
                    journey as a postgraduate student at the University of Hull.
                  </p>
                </div>
                <div className="text-red-700 pt-5 text-lg underline font-extrabold hover:text-blue-950">
                  <a href="#">Read full article</a>
                </div>
              </div>
              <div className="max-w-full md:max-w-[50%]">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="object-contain w-full h-full px-10"
                  src="/images/7.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white md:flex-row flex-col gap-4 md:gap-0 flex justify-between max-w-[70%] py-8 mx-auto"
            >
              <div className=" px-10">
                <a
                  href="#"
                  className="text-blue-900 font-extrabold text-3xl hover:text-red-700"
                >
                  Celebrating our Chevening Alumni: award winners
                </a>
                <div className="pt-5">
                  <p href="#" className="text-blue-900 font-semibold ">
                    2 August 2024
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-blue-950 ">
                    Numbering 57,000+ around the world, our Chevening Alumni
                    community is making an impressive impact across a diverse
                    range of sectors. We are celebrating our Chevening Alumni
                    who recently been honoured as winners
                  </p>
                </div>
                <div className="text-red-700 pt-5 text-lg underline font-extrabold hover:text-blue-950">
                  <a href="#">Read full article</a>
                </div>
              </div>
              <div className="max-w-full md:max-w-[50%]">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="object-contain w-full h-full px-10"
                  src="/images/8.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white md:flex-row flex-col gap-4 md:gap-0 flex justify-between max-w-[70%] py-8 mx-auto"
            >
              <div className=" px-10">
                <a
                  href="#"
                  className="text-blue-900 font-extrabold text-3xl hover:text-red-700"
                >
                  How to future proof your career after your Chevening year
                </a>
                <div className="pt-5">
                  <p href="#" className="text-blue-900 font-semibold ">
                    2 August 2024
                  </p>
                </div>
                <div className="pt-5">
                  <p className="text-blue-950 ">
                    {` As a Chevening Alumnus, you possess a unique blend of
                    skills, global perspectives, and a prestigious network that
                    can propel your career forward. Whether you’re happily
                    employed or searching for your next job`}
                  </p>
                </div>
                <div className="text-red-700 pt-5 text-lg underline font-extrabold hover:text-blue-950">
                  <a href="#">Read full article</a>
                </div>
              </div>
              <div className=" max-w-full md:max-w-[50%]">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className="object-contain w-full h-full px-10"
                  src="/images/19.jpg"
                  alt="image description"
                />
              </div>
            </motion.div>

            {/* number */}
            <div className="bg-white gap-x-2 md:flex justify-center max-w-[70%] py-8 mx-auto">
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                1
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                2
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                3
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                4
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                5
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                6
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                ...
              </a>
              <a
                href="#"
                className="p-3 text-blue-950 text-lg font-extrabold hover:text-red-600"
              >
                Next
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default BlogPage;
