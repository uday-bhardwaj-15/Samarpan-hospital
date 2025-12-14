"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Microscope, Leaf, Zap } from "lucide-react";

/*
  Updated SpecialtiesSection
  - removed the static duplicate cards on mobile
  - added a responsive StickyGallery that shows the image and department title on the image
  - the gallery updates on scroll for desktop and mobile using IntersectionObserver (works reliably on touch devices)
  - still supports GSAP/ScrollTrigger if you want to enable it (optional) — instructions in comments

  NOTE: If you want GSAP-style pinning/animations, install `gsap` and `gsap/ScrollTrigger`, then flip the `useGsap` flag below to true.
*/

const specialties = [
  {
    id: "emergency",
    icon: Activity,
    title: "Emergency Care",
    description:
      "24/7 emergency department with trauma specialists and ICU facilities",
    image: "/cardiology-heart-specialist-doctor-hospital.jpg",
  },
  {
    id: "diagnostics",
    icon: Microscope,
    title: "Diagnostics",
    description:
      "Advanced laboratory and imaging services for accurate diagnosis",
    image: "/neurology-brain-specialist.jpg",
  },
  {
    id: "wellness",
    icon: Leaf,
    title: "Wellness Programs",
    description: "Preventive care and wellness initiatives for healthy living",
    image: "/orthopedics-bone-joint-specialist.jpg",
  },
  {
    id: "telemedicine",
    icon: Zap,
    title: "Telemedicine",
    description: "Consult with doctors online from the comfort of your home",
    image: "/hospital-telemedicine.jpg",
  },
];

function StickyGallery({
  items,
  className = "",
}: {
  items: any[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);

  // Optional: enable GSAP if you prefer more advanced pin/animations.
  const useGsap = false; // set to true if you installed `gsap` and want ScrollTrigger pinning

  useEffect(() => {
    // IntersectionObserver approach — works well for mobile touch scrolling
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            if (!Number.isNaN(idx)) setActive(idx);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // make the "active" region central
        threshold: 0,
      }
    );

    sectionsRef.current.forEach((el) => el && io.observe(el));

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!useGsap) return;
    // If you set useGsap = true, the following will try to register ScrollTrigger.
    // Make sure to `npm i gsap` and import `gsap` and `ScrollTrigger` at the top of this file.
    // Example: import gsap from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger';
    // gsap.registerPlugin(ScrollTrigger);
    // Then create a pinned timeline on the image area for desktop only.
  }, [useGsap]);

  return (
    <div className={`w-full ${className}`} ref={containerRef}>
      <div className=" md:grid-cols-2 gap-6">
        {/* IMAGE / STICKY AREA */}
        <div className="order-1 md:order-none">
          <div className="relative h-64 md:h-[480px] w-full overflow-hidden rounded-2xl shadow-md">
            {/* Sticky container: works on mobile and desktop */}
            <div className="sticky top-6 md:top-12 h-[calc(100%-1.5rem)] md:h-[calc(100%-3rem)]">
              <img
                src={items[active].image}
                alt={items[active].title}
                className="object-cover w-full h-full rounded-2xl"
              />

              {/* Title overlay on image */}
              <div className="absolute left-4 right-4 bottom-4 md:bottom-8 p-3 md:p-4 rounded-lg bg-black/40 backdrop-blur-sm text-white">
                <h3 className="text-lg md:text-2xl font-bold">
                  {items[active].title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {items[active].description}
                </p>
              </div>
            </div>
          </div>

          {/* Thumbnail strip (mobile-friendly) */}
          <div className="mt-3 flex gap-3 overflow-x-auto md:hidden px-1">
            {items.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setActive(i)}
                className={`flex-none w-28 h-16 rounded-lg overflow-hidden border-2 ${
                  i === active ? "border-blue-600" : "border-transparent"
                }`}
                aria-label={`Show ${it.title}`}
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpecialtiesSection() {
  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Specialties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive clinical services across multiple specialties —
            equipped with the latest technology for accurate diagnosis and
            compassionate care.
          </p>
        </div>

        {/* Unified responsive gallery that replaces the previous separate mobile / desktop layouts */}
        <div className="mt-6">
          <StickyGallery items={specialties} />
        </div>
      </div>
    </section>
  );
}
