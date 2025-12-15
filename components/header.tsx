"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-trans.png"
                alt="Samarpan Hospital Logo"
                width={150}
                height={100}
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold text-gray-900">
                Samarpan Hospital
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Gallery
            </Link>
            <Link
              href="doctors"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Doctors
            </Link>
            <Link
              href="/departments"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Departments
            </Link>
            <Link
              href="contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </Link>

            <Button className="bg-[#b94198] text-white hover:bg-[#b94198]/10 hover:text-[#b94198]">
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 flex flex-col">
            <Link
              href="/"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Gallery
            </Link>
            <Link
              href="doctors"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Doctors
            </Link>
            <Link
              href="/departments"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Departments
            </Link>
            <Link
              href="contact"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Contact
            </Link>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
