"use client";

import React from "react";
import TeamCarousel from "@/components/lightswind/team-carousel"; // adjust path if needed
// import PlasmaGlobe from "@/components/plasma-globe";

const departmentCards = [
  {
    title: "Cardiology",
    subtitle: "Heart Care",
    description:
      "Advanced cardiovascular treatments and diagnostic services for heart health",
    imageSrc: "/cardiology-heart-specialist-doctor-hospital.jpg",
  },
  {
    title: "Neurology",
    subtitle: "Brain Health",
    description:
      "Comprehensive neurological care for brain and nervous system disorders",
    imageSrc: "/neurology-brain-specialist.jpg",
  },
  {
    title: "Orthopedics",
    subtitle: "Joint Care",
    description:
      "Specialized bone and joint care with advanced surgical techniques",
    imageSrc: "/orthopedics-bone-joint-specialist.jpg",
  },
];

export default function DepartmentsSection() {
  // map to TeamCarousel's TeamMember shape
  const members = departmentCards.map((d, i) => ({
    id: `dept-${i}`,
    name: d.title,
    role: d.subtitle,
    image: d.imageSrc,
    bio: d.description,
  }));

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Complete Health Services with Advanced Facilities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We provide exceptional care with a patient-first approach, advanced
            facilities, and expert doctors for high-quality treatments.
          </p>
        </div>

        {/* MOBILE-FIRST: TeamCarousel (mobile & tablet priority) */}
        <div className="block md:hidden">
          <TeamCarousel
            members={members}
            title="Departments"
            titleSize="md"
            titleColor="rgba(12, 74, 162, 1)"
            // mobile tuned sizes
            cardWidth={300}
            cardHeight={380}
            cardRadius={18}
            showArrows={false} // on mobile, prefer swipe
            showDots={true}
            keyboardNavigation={false}
            touchNavigation={true}
            animationDuration={450}
            autoPlay={3500}
            pauseOnHover={true}
            visibleCards={1}
            sideCardScale={0.95}
            sideCardOpacity={0.85}
            grayscaleEffect={false}
            infoPosition="bottom"
            infoTextColor="rgb(8, 42, 123)"
            className="bg-white/0 py-6"
            cardClassName="rounded-xl overflow-hidden"
            initialIndex={0}
          />
        </div>

        {/* DESKTOP: two-column with PlasmaGlobe + cards list */}
        <div className="hidden md:grid grid-cols-2 gap-12 items-start mt-8">
          {/* <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <PlasmaGlobe />
          </div> */}

          <div className="space-y-6">
            {departmentCards.map((card, idx) => (
              <article
                key={idx}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-4 items-start"
              >
                <div
                  className="w-full md:w-36 h-24 md:h-24 rounded-md flex-shrink-0 bg-cover bg-center shadow-inner"
                  style={{
                    backgroundImage: `url(${card.imageSrc})`,
                  }}
                  role="img"
                  aria-label={`${card.title} image`}
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 text-sm">
                    {card.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:brightness-95 transition"
                    >
                      Learn more
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md border border-gray-200 text-gray-700 text-sm"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Tablet: small card grid fallback */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-4 mt-8">
          {departmentCards.map((card, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div
                className="w-full h-36 rounded-md mb-3 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.imageSrc})` }}
                role="img"
                aria-label={`${card.title} image`}
              />
              <h4 className="text-lg font-bold mb-1">{card.title}</h4>
              <p className="text-blue-600 font-semibold text-sm mb-2">
                {card.subtitle}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
