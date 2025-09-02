"use client";

import React, { useState } from "react";
import {
  FaHome,
  FaUtensils,
  FaTags,
  FaStore,
  FaTruck,
  FaUserCircle,
} from "react-icons/fa";
import Image from "next/image";
import tastifyMain from "@/assets/tastify_main.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/"); // tracks which button is active
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome className="mr-2" /> },
    {
      href: "/menu",
      label: "Browse Menu",
      icon: <FaUtensils className="mr-2" />,
    },
    {
      href: "/special-offers",
      label: "Special Offers",
      icon: <FaTags className="mr-2" />,
    },
    {
      href: "/restaurants",
      label: "Restaurants",
      icon: <FaStore className="mr-2" />,
    },
    {
      href: "/track-orders",
      label: "Track Order",
      icon: <FaTruck className="mr-2" />,
    },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src={tastifyMain}
                width={115}
                height={115}
                className="mr-20"
                alt="Tastify"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-right space-x-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => setActiveLink(link.href)} // just set active, don't navigate
                  className={`flex cursor-pointer items-center px-4 py-2 rounded-full text-sm font-medium transition duration-200
                    ${
                      activeLink === link.href
                        ? "bg-orange-500 text-white"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                >
                  {link.icon} {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Login/Signup Button */}
          <div className="hidden md:flex">
            <button className="bg-gray-900 text-white cursor-pointer px-6 py-2 rounded-full text-sm font-medium flex items-center transition-colors duration-300 hover:border-orange-600 hover:border hover:bg-white hover:text-black">
              <FaUserCircle className="mr-2 text-lg" />
              Login/Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 relative z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3  ">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`flex cursor-pointer items-center px-3 py-2 rounded-md text-base font-medium w-full text-left
                  ${
                    activeLink === link.href
                      ? "bg-orange-500 text-white"
                      : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                  }`}
              >
                {link.icon} {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => alert("Clicked!")}
                className="cursor-pointer relative z-50 w-full bg-gray-900 text-white px-3 py-2 rounded-full text-base font-medium hover:bg-gray-800 transition duration-200 flex items-center justify-center"
              >
                <FaUserCircle className="mr-2 text-lg" />
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
