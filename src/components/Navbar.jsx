"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    console.log(isMenuOpen, "is menu open");
  };

  return (
    <header className="w-full">
      <nav className="bg-gradient-to-r bg-slate-200">
        <div className="header-top flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            target="blank"
            className="flex items-center space-x-3 rtl:space-x-reverse "
          >
            <img src="/images/Lailao.png" className="h-[80px] w-[150px] ml-5" />
          </Link>

          {/* Toggle Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-blue-800"
              onClick={toggleMenu}
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 mr-5 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
              <Link
                href="/blog"
                className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:hover:text-black md:dark:text-blue-700"
                aria-current="page"
              >
                News & Blog
              </Link>

              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About us
              </Link>

              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Partner with us
              </Link>

              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>

              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700  dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="section2">
        <nav className="container">
          Lailaolab
          <Link href="/about">RESOURCES HUB</Link>
          <Link href="/services">SCHORLARSHIPS</Link>
          <Link href="/blog">FELLOWERSHIPS</Link>
          <Link href="/contact">OUR IMPACT</Link>
        </nav>
      </div> */}
      {isMenuOpen ? (
        <ul className="font-medium flex flex-col p-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
          <Link
            href="#"
            className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 hover:bg-blue-500 md:dark:text-blue-700"
          >
            News & Blog
          </Link>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About us
          </Link>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Partner with us
          </Link>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </Link>
          <Link
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-700  dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </Link>
        </ul>
      ) : null}
    </header>
  );
};

export default Navbar;
