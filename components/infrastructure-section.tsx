"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const facilities = [
  {
    id: 1,
    title: "Advanced Imaging",
    description: "State-of-the-art MRI and CT scanning technology for precise diagnostics and early detection",
    imageSrc: "/medical-imaging-mri-ct-scan-hospital.jpg",
    tags: ["Imaging", "Diagnostics"],
  },
  {
    id: 2,
    title: "Surgery Centers",
    description: "Fully equipped operation theaters with latest technology and sterile environments",
    imageSrc: "/operating-room-surgery-hospital.jpg",
    tags: ["Surgery", "Emergency"],
  },
  {
    id: 3,
    title: "ICU Units",
    description: "Intensive care with round-the-clock monitoring and critical care specialists",
    imageSrc: "/hospital-icu-beds-intensive-care.jpg",
    tags: ["Critical Care", "Emergency"],
  },
  {
    id: 4,
    title: "Lab Services",
    description: "Comprehensive diagnostic laboratory services with rapid turnaround times",
    imageSrc: "/medical-laboratory-diagnostics-testing.jpg",
    tags: ["Lab", "Testing"],
  },
  {
    id: 5,
    title: "Pharmacy",
    description: "Full-service pharmacy with certified pharmacists and comprehensive medication management",
    imageSrc: "/hospital-pharmacy-medications.jpg",
    tags: ["Pharmacy", "Medications"],
  },
]

export default function InfrastructureSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1))
  }

  const currentFacility = facilities[currentIndex]

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">Our Infrastructure</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            World-class facilities and equipment for exceptional patient care
          </p>
        </div>

        {/* Desktop Layout: Image on left, Text on right */}
        <div className="hidden md:grid grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative">
            <img
              src={currentFacility.imageSrc || "/placeholder.svg"}
              alt={currentFacility.title}
              className="w-full h-96 lg:h-[500px] rounded-xl object-cover shadow-2xl transition-opacity duration-500"
            />

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all hover:scale-110"
              aria-label="Previous facility"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all hover:scale-110"
              aria-label="Next facility"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {facilities.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to facility ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 transition-all duration-300">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentFacility.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{currentFacility.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {currentFacility.tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Stacked */}
        <div className="md:hidden space-y-8">
          {/* Image */}
          <div className="relative">
            <img
              src={currentFacility.imageSrc || "/placeholder.svg"}
              alt={currentFacility.title}
              className="w-full h-64 sm:h-80 rounded-lg object-cover shadow-lg transition-opacity duration-500"
            />

            {/* Mobile Navigation */}
            <div className="flex justify-between mt-4 gap-4">
              <button
                onClick={goToPrevious}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all active:scale-95"
                aria-label="Previous facility"
              >
                <ChevronLeft size={20} className="mx-auto" />
              </button>
              <button
                onClick={goToNext}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-all active:scale-95"
                aria-label="Next facility"
              >
                <ChevronRight size={20} className="mx-auto" />
              </button>
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {facilities.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to facility ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 transition-all duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{currentFacility.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{currentFacility.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {currentFacility.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
