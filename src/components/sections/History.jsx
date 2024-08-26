"use client";

import React, { Fragment } from "react";

// Third Party
import { motion } from "framer-motion";

const History = () => {
  return (
    <Fragment>
      <section>
        <div className=" bg-blue-900 p-10 items-center flex">
          <div className=" md:m-10">
            <div
              //   viewport={{
              //     once: true,
              //   }}
              className="md:max-w-[50%] mx-auto "
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="title"
              >
                <h2 className="text-yellow-500 text-4xl text-center italic font-extrabold ">
                  40 years of impact
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-xl text-blue-290 pt-5"
              >
                In honour of our 40th anniversary, we sat down with some of our
                most extraordinary alumni to hear about the impact they have had
                since their Chevening year. From foregrounding the human
                dimensions of climate change to helping women and girls to find
                their voice, their stories are an inspiring reminder that there
                is no limit to what you can achieve with a Chevening Scholarship
                or Fellowship.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col-reverse md:flex-row md:justify-between items-center"
        >
          <div className="max-w-full md:max-w-[50%] text-left p-10 ">
            <h2 className="italic font-extrabold text-3xl text-blue-900">
              Introducing the climate warrior: Anote Tong journey
            </h2>
            <p className="pt-5 text-xl text-blue-800">
              In September 2004, President Anote Tong of Kiribati made history
              at the United Nations General Assembly by highlighting the urgent
              need for action on climate change, sparking a global movement for
              climate justice and earning him the title of climate warrior.
            </p>
          </div>
          <div>
            <motion.img
              className=" w-full h-full"
              src="/images/5.jpg"
              alt="image description"
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-blue-900 ">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:justify-between items-center"
        >
          <div className="max-w-full flex justify-between">
            <motion.img
              className="w-full h-full"
              src="/images/3.jpg"
              alt="image description"
            />
          </div>
          <div className="max-w-full md:max-w-[50%] text-left p-10 ">
            <h2 className="italic font-extrabold text-3xl">
              Leaving conflict and finding community with Chevening in the 1990s
            </h2>
            <p className="pt-5 text-xl text-blue-200">
              Dr Mina Brajovic is the Head of the World Health Organisation
              (WHO) Country Office in Montenegro. She became a Chevening Scholar
              in 1999, studying Law at the University of Cambridge at a time
              when her country was recovering from conflict. Almost 25 years on,
              Mina reflects on how her aspirations for building a better world
              have changed over time, as well as the key learnings that have
              stayed with her from her Chevening year.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="">
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col-reverse md:flex-row md:justify-between items-center"
        >
          <div className="max-w-full md:max-w-[50%] text-left p-10 ">
            <h2 className="italic font-extrabold text-blue-900 text-3xl">
              Building a better future for women and girls in India
            </h2>
            <p className="pt-5 text-xl text-blue-800">
              Kanta Singh has dedicated her whole career to tackling issues of
              gender inequality. In 2019, she embarked on the Chevening Gurukul
              Fellowship for Leadership and Excellence. The programme allowed
              her to expand her network and capacity even further to help her on
              her mission to build a more equal India, one girl and one voice at
              a time.
            </p>
          </div>
          <div className="flex justify-between">
            <motion.img
              className="w-full h-full"
              src="/images/19.jpg"
              alt="image description"
            />
          </div>
        </motion.div>
      </section>
    </Fragment>
  );
};

export default History;
