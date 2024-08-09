import React from "react";
import Link from "next/link";

// Icons
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-blue-950 w-full">
      <div className="footer top w-full max-w-screen-xl mx-auto p-3 md:py-8">
        <div className="flex items-center justify-between">
          <Link
            href="https://facebook.com/"
            className="flex items-center mb-5  space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/Lailao.png" className="h-[90px] w-[100%]" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>

          <div class="grid grid-cols-3 gap-5">
            <div>
              <h2 class="mb-3 text-lg font-semibold text-gray-900 uppercase dark:text-white">
                News
              </h2>
              <div className=" pb-5 text-gray-500 dark:text-gray-400 font-medium">
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
              <div className="text-gray-500 dark:text-gray-400 font-medium">
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
              <div class="text-gray-500 dark:text-gray-400 font-medium">
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

        <div className="footer-bottom">
          <hr class=" border-gray-200 mx-auto dark:border-gray-700" />
          <div className="flex p-5 items-center justify-between">
            <div className="text-lg text-center dark:text-gray-300">
              © 2024{" "}
              <a
                href="https://facebook.com/"
                target="blank"
                className="hover:underline text-gray-400"
              >
                Foundation Website for Lailaolab™
              </a>
              . Design by Alex.
            </div>

            <div className="flex justify-center ">
              <div className="icon flex justify-between gap-4">
                <div>
                  <Link
                    className="text-gray-300 hover:text-blue-600"
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook size={40} className="" />
                  </Link>
                </div>
                <div>
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
                </div>
                <div>
                  <Link
                    className="text-gray-300 hover:text-green-500"
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp size={40} className="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
