"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    role: "Cardiologist",
    image: "/female-cardiologist-doctor-professional.jpg",
    bio: "15+ years of experience in cardiovascular medicine",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    role: "Orthopedic Surgeon",
    image: "/male-orthopedic-surgeon-doctor.jpg",
    bio: "Expert in joint replacement and sports medicine",
  },
  {
    id: "3",
    name: "Dr. Priya Patel",
    role: "Neurologist",
    image: "/female-neurologist-doctor-specialist.jpg",
    bio: "Specialized in neurodegenerative diseases",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    role: "Surgeon",
    image: "/male-surgeon-doctor-hospital.jpg",
    bio: "Advanced surgical techniques and procedures",
  },
  {
    id: "5",
    name: "Dr. Emily Davis",
    role: "Pediatrician",
    image: "/female-pediatrician-doctor-children.jpg",
    bio: "Compassionate child healthcare specialist",
  },
]

export default function OurTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1))
  }

  const currentDoctor = doctors[currentIndex]
  const nextIndex = (currentIndex + 1) % doctors.length
  const prevIndex = (currentIndex - 1 + doctors.length) % doctors.length

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Find the Right Doctor for Your Needs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Our team of highly qualified and experienced specialists
          </p>
        </div>

        {/* Desktop Carousel View */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-4 lg:gap-8 relative min-h-96">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all hover:scale-110 z-10"
              aria-label="Previous doctor"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Left Card (Previous) */}
            <div className="w-56 h-80 rounded-xl overflow-hidden shadow-md opacity-50 scale-90 transition-all">
              <img
                src={doctors[prevIndex].image || "/placeholder.svg"}
                alt={doctors[prevIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Card (Current) - Featured */}
            <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl scale-100 z-10 flex-shrink-0 bg-white">
              <img
                src={currentDoctor.image || "/placeholder.svg"}
                alt={currentDoctor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold">{currentDoctor.name}</h3>
                <p className="text-blue-200">{currentDoctor.role}</p>
              </div>
            </div>

            {/* Right Card (Next) */}
            <div className="w-56 h-80 rounded-xl overflow-hidden shadow-md opacity-50 scale-90 transition-all">
              <img
                src={doctors[nextIndex].image || "/placeholder.svg"}
                alt={doctors[nextIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-0 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all hover:scale-110 z-10"
              aria-label="Next doctor"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            {/* Doctor Image */}
            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
              <img
                src={currentDoctor.image || "/placeholder.svg"}
                alt={currentDoctor.name}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Doctor Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{currentDoctor.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{currentDoctor.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{currentDoctor.bio}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mb-6">
              <button
                onClick={goToPrevious}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all active:scale-95 flex items-center justify-center"
                aria-label="Previous doctor"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-all active:scale-95 flex items-center justify-center"
                aria-label="Next doctor"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {doctors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to doctor ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Dots Indicator */}
        <div className="hidden md:flex justify-center gap-3 mt-12">
          {doctors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to doctor ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
