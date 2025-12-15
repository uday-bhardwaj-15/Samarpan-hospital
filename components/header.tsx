"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Image src="/logo.PNG" height={80} width={80} alt="logo" />
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">
              Samarpan Hospital
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Doctors
            </a>
            <a
              href="departments"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Departments
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
            <a
              href="about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About Us
            </a>
            <a
              href="gallery"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Gallery
            </a>

            <Button className="bg-[#b94198] text-white  hover:bg-[#b94198]/10 hover:text-[#b94198]">
              Book Appointment
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#services"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Doctors
            </a>
            <a
              href="departments"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Departments
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Contact
            </a>
            <a
              href="about"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About Us
            </a>
            <a
              href="gallery"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Gallery
            </a>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
