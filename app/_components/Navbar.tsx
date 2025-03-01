"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar border-b border-[#333333] w-full fixed top-0 left-0 z-20 py-2 md:px-20 lg:px-32 bg-[#000000]">
      <div className="flex items-center justify-between w-full p-4 py-1 md:py-4 rounded-2xl text-white">
        {/* Mobile Menu */}
        <div className="navbar-start md:hidden relative">
          <button onClick={toggleMenu} className="btn pl-0 btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          {isMenuOpen && (
            <ul className="menu menu-lg absolute bg-base-100 rounded-box z-[1] mt-3 w-40 p-0 shadow">
              <li onClick={closeMenu}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/about">About</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center md:text-2xl text-xl font-bold whitespace-nowrap">SMP</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
