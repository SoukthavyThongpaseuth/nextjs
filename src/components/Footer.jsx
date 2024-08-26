"use client";

import React from "react";
import Link from "next/link";

// Icons
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className=" bg-blue-950 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
        <div className="md:flex max-w-[50%] md:max-w-full items-center justify-between">
          <Link
            href="https://facebook.com/"
            className="flex items-center mb-5 space-x-3 rtl:space-x-reverse"
          >
            <motion.img
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              src="/images/lailao2.png"
              className="md:h-[90px] md:w-[100%]"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>

          <div class="md:grid grid-cols-3 gap-5">
            <div>
              <h2 class="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                News
              </h2>
              <div className=" pb-3 text-gray-500 dark:text-gray-400 font-medium">
                <div>
                  <a href="https://flowbite.com/" class="hover:underline">
                    Scholarships
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Fellowships
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Alumni
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Apply
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 class="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                LAILAOLAB
              </h2>
              <div className="pb-3 text-gray-500 dark:text-gray-400 font-medium">
                <div>
                  <a href="https://flowbite.com/" class="hover:underline">
                    Home
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    About Us
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    News & Blog
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Lailaolab
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 class="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <div class="pb-3 text-gray-500 dark:text-gray-400 font-medium">
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Accessibility notice
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Sitemap
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <hr class=" border-gray-200 mx-auto dark:border-gray-700" />
          <div className="md:flex p-5 items-center justify-between">
            <div className="text-lg text-center dark:text-gray-300">
              © 2024{" "}
              <a
                href="https://facebook.com/"
                target="blank"
                className="hover:underline text-gray-400"
              >
                Foundation Website for Lailaolab™
              </a>
              {/* . Design by Alex. */}
            </div>

            <div className="flex justify-center ">
              <div className="icon flex justify-between p-5 gap-4">
                <h2 className="pt-2 underline">Contact Us:</h2>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <Link
                    className="text-gray-300 hover:text-blue-600"
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook size={35} className="" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <Link
                    className="text-gray-300 hover:text-red-600"
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiMail size={40} className="" />
                  </Link>
                </motion.div>
                {/* <div>
                  <Link
                    className="text-gray-300 hover:text-black"
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <RiTwitterXLine size={40} className="" />
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-300 hover:text-red-500"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={40} className="" />
                  </Link>
                </div> */}

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                >
                  <Link
                    className="text-gray-300 hover:text-green-500"
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={38} className="" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
