"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl bg-white/10 backdrop-blur-md shadow-xl rounded-full border border-white/20">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between py-2 md:py-4">
          {/* Mobile Menu */}
          <div className="relative md:hidden">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 text-black bg-white/50 backdrop-blur-sm rounded-lg shadow-md p-2">
                <li
                  className="p-2 hover:bg-white/30 rounded cursor-pointer"
                  onClick={closeMenu}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className="p-2 hover:bg-white/30 rounded cursor-pointer"
                  onClick={closeMenu}
                >
                  <Link href="/about">About</Link>
                </li>
                <li
                  className="p-2 hover:bg-white/30 rounded cursor-pointer"
                  onClick={closeMenu}
                >
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Logo */}
          <div>
            <Link href="/">
              <p className="flex items-center space-x-2">
                <span className="text-white text-2xl font-bold">SMP</span>
              </p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="text-white hover:text-gray-300">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link href="/about">About</Link>
              </li>
              <li className="text-white hover:text-gray-300">
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
