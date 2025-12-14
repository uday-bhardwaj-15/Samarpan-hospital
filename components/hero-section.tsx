"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-8 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image First on Mobile */}
          <div className="order-first md:order-last relative h-64 sm:h-80 md:h-96 bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/hospital-doctors-team-healthcare-professionals.jpg"
              alt="Hospital team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-first">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Samarpan Hospital & Kidney Care Center
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
              Book appointments with expert doctors, access facilities, and
              manage your health from one place with ease and confidence.
            </p>
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent text-sm sm:text-base"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
