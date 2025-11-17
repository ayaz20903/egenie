"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/logo-final.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 lg:z-30 bg-[#ffffff]/0 backdrop-blur-md border-b border-white/10">
      <div className="container max-full mx-auto flex justify-between items-center px-6 py-3 lg:py-4">
        {/* Logo */}
        <Link href="/" className="hidden lg:flex items-center gap-2">
          <Image
            src={logo}
            alt="eGeniePlus Logo"
            width={100}
            height={30}
            className="object-contain"
          />
        </Link>

        <Link href="/" className="flex lg:hidden items-center gap-2">
          <Image
            src={logo}
            alt="eGeniePlus Logo"
            width={70}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-black font-bold">
          <Link href="#features" className="">
            Features
          </Link>
          <Link href="#pricing" className="">
            Pricing
          </Link>
          <Link href="#demo" className="">
            Chat with eGenie
          </Link>
          <Link href="#contact" className="">
            Contact
          </Link>
          <Link
            href="#get-started"
            className="px-5 py-2  bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)] text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-white/10 px-6 py-4 space-y-4 text-gray-300 z-40"
          >
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#demo"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Demo
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-2 bg-gradient-to-r from-[#5e48ff] to-[#5e48ff] text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
