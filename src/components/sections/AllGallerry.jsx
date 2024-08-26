"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AllGallerry = () => {
  return (
    <div>
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
                  className=" text-yellow-600 
                text-5xl text-center 
                italic font-extrabold "
                >
                  Get Involved
                </h2>
              </motion.div>

              {/* after caption */}
              <div className="md:flex gap-10 m-5">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.3 }}
                  className="w-full h-full "
                >
                  <Image
                    className="w-full h-full p-3"
                    src="/images/13.jpg"
                    alt="image description"
                    width={500}
                    height={300}
                  />
                  <div>
                    <div>
                      <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                        RECONNECT WITH CHEVENING ALUMNI
                      </h2>
                    </div>
                    <p className="text-center text-lg text-black pt-3">
                      Were you a Chevening Scholar or Fellow? Find out how to
                      stay in touch with us and how to make the most of being
                      part of a global alumni community like no other.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    className="w-full h-full p-3"
                    src="/images/14.jpg"
                    alt="image description"
                    width={500}
                    height={300}
                  />
                  <div>
                    <div>
                      <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                        SUPPORT THE NEXT GENERATION OF LEADERS
                      </h2>
                    </div>
                    <p className="text-center text-lg text-black pt-3">
                      Over the next 40 years, we would like another 57,000
                      exceptional individuals to have the opportunity to make a
                      positive global impact. To do this, we rely on the support
                      of organizations that share our vision of investing in the
                      education of future leaders.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, delay: 0.9 }}
                  className="w-full h-full"
                >
                  <Image
                    className="w-full h-full p-3"
                    src="/images/15.jpg"
                    alt="image description"
                    width={500}
                    height={300}
                  />
                  <div>
                    <div>
                      <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                        ENJOY THE GROBAL CELEBRATIONS
                      </h2>
                    </div>
                    <p className="text-center text-lg text-black pt-3">
                      round the world, British embassies, high commissions, and
                      alumni associations have been hosting celebratory 40th
                      anniversary events, bringing together alumni from the past
                      40 years.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" bg-white p-5 items-center md:flex grid-flow-col">
          <div>
            <div className="mx-auto flex flex-col justify-between ">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className=" text-yellow-600 text-5xl text-center italic font-extrabold ">
                    40th Anniversary news
                  </h2>
                </motion.div>

                <div className="md:flex gap-10 m-5">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.9 }}
                    className="w-full h-full "
                  >
                    <Image
                      className="w-full h-full p-3"
                      src="/images/16.jpg"
                      alt="image description"
                      width={500}
                      height={300}
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          40 YEARS OF EXCELLENCE: CHEVENING MARKS HISTORIC
                          MILESTONE
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        On 24 October 2023, friends of Chevening attended a
                        special reception at Lancaster House to celebrate 40
                        years of Chevening.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image
                      className="w-full h-full p-3"
                      src="/images/17.jpg"
                      alt="image description"
                      width={500}
                      height={300}
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          MEET OUR 40TH COHORT!
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        {`Across the UK, our 40th cohort of Cheveners are settling
                        into their university courses! We caught up with some
                        scholars to find out how it feels to be part of such a
                        historic year.`}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      className="w-full h-full p-3"
                      src="/images/18.jpg"
                      alt="image description"
                      width={500}
                      height={300}
                    />
                    <div>
                      <div className="title">
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          GLOBAL ALUMNI COME TOGETHER TO CELEBRATE 40 YEARS OF
                          CHEVENING
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        Around the world, British embassies, high commissions,
                        and alumni associations have been hosting celebratory
                        events!
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllGallerry;
