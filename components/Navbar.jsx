"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              
            </Link>
          </div>

          {/* Menu Items - Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800  font-bold hover:text-blue-500">
              HOME
            </Link>
            <Link href="/about" className="text-gray-800 font-bold hover:text-blue-500">
              ABOUT
            </Link>
            <Link href="/courses" className="text-gray-800 font-bold  hover:text-blue-500">
              COURSE
            </Link>
            <Link href="/contact" className="text-gray-800 font-bold hover:text-blue-500">
              CONTACT
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-gray-800 hover:text-blue-500">
           HOME
          </Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-500">
            ABOUT
          </Link>
          <Link href="/courses" className="block text-gray-800 hover:text-blue-500">
            COURSE
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-blue-500">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
