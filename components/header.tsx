// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="/logo-trans.png"
//                 alt="Samarpan Hospital Logo"
//                 width={150}
//                 height={100}
//                 className="h-12 w-auto object-contain"
//               />
//               <span className="text-xl font-bold text-gray-900">
//                 Samarpan Hospital
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex gap-8 items-center">
//             <Link
//               href="/"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/gallery"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Gallery
//             </Link>
//             <Link
//               href="doctors"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Doctors
//             </Link>
//             <Link
//               href="/departments"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Departments
//             </Link>
//             <Link
//               href="contact"
//               className="text-gray-600 hover:text-blue-600 transition"
//             >
//               Contact
//             </Link>

//             <Button className="bg-[#b94198] text-white hover:bg-[#b94198]/10 hover:text-[#b94198]">
//               Book Appointment
//             </Button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden pb-4 space-y-2 flex flex-col">
//             <Link
//               href="/"
//               className="block text-gray-600 hover:text-blue-600 py-2"
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="block text-gray-600 hover:text-blue-600 py-2"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/gallery"
//               className="block text-gray-600 hover:text-blue-600 py-2"
//             >
//               Gallery
//             </Link>
//             <Link
//               href="doctors"
//               className="block text-gray-600 hover:text-blue-600 py-2"
//             >
//               Doctors
//             </Link>
//             <Link
//               href="/departments"
//               className="block text-gray-600 hover:text-blue-600 py-2"
//             >
//               Departments
//             </Link>
//             <Link
//               href="contact"
//               className="block text-gray-600 hover:text-blue-600 py-2"
//             >
//               Contact
//             </Link>

//             <Button className="w-full bg-blue-600 hover:bg-blue-700">
//               Book Appointment
//             </Button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Find Care", href: "/find-care" },
  { label: "Patient Resources", href: "/patient-resources" },
  { label: "Treatment Options", href: "/treatment-options" },
  { label: "Locations", href: "/locations" },
  { label: "Discover", href: "/discover" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold" style={{ color: "#2563eb" }}>
                UCLA
              </span>
              <span
                className="text-2xl font-light ml-1"
                style={{ color: "#1e3a5f" }}
              >
                Health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-4 transition-colors duration-200 hover:opacity-80"
                style={{ color: "#1e3a5f" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              className="font-semibold px-6 py-2.5 rounded-sm transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: "#d4a853", color: "#1e3a5f" }}
            >
              Find a Doctor
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: "#1e3a5f" }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "#e5e7eb" }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 rounded-md transition-colors"
                  style={{ color: "#1e3a5f" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className="px-4 pt-4 border-t mt-2"
                style={{ borderColor: "#e5e7eb" }}
              >
                <button
                  className="w-full font-semibold py-2.5 rounded-sm"
                  style={{ backgroundColor: "#d4a853", color: "#1e3a5f" }}
                >
                  Find a Doctor
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
