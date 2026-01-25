"use client";

import React from "react";
import TeamCarousel from "@/components/lightswind/team-carousel"; // adjust path if needed
// import PlasmaGlobe from "@/components/plasma-globe";

const departmentCards = [
  {
    title: "Fistula Surgery",
    subtitle: "Vascular Access Care",
    description:
      "AV fistula creation and related procedures for dialysis patients.",
    imageSrc:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Radiology",
    subtitle: "Diagnostic Imaging",
    description:
      "Radiology services supporting diagnosis through imaging and reporting.",
    imageSrc:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Urology",
    subtitle: "Urinary Tract Care",
    description:
      "Diagnosis and treatment of urinary system and related disorders.",
    imageSrc:
      "https://images.unsplash.com/photo-1631815587646-b85a3dbfd5da?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Pain Clinic",
    subtitle: "Pain Management",
    description:
      "Pain management services for chronic and acute pain conditions.",
    imageSrc:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Critical Care",
    subtitle: "Intensive Monitoring",
    description:
      "Critical care services with continuous patient monitoring and support.",
    imageSrc:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Casualty",
    subtitle: "Initial Medical Care",
    description:
      "Casualty services for immediate assessment and primary medical attention.",
    imageSrc:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Emergency Dialysis",
    subtitle: "24×7 Dialysis Support",
    description: "Emergency dialysis services available for urgent renal care.",
    imageSrc:
      "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Plasmapheresis",
    subtitle: "Advanced Blood Therapy",
    description:
      "Plasmapheresis services for selective blood component therapy.",
    imageSrc:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Research",
    subtitle: "Clinical Research",
    description:
      "Clinical research activities focused on improving patient care outcomes.",
    imageSrc:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "VIP ICU",
    subtitle: "Private Critical Care",
    description:
      "VIP ICU providing enhanced privacy and dedicated critical care support.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "Poly Clinic",
    subtitle: "Outpatient Services",
    description:
      "Polyclinic services offering consultation across multiple specialties.",
    imageSrc:
      "https://images.unsplash.com/photo-1600959907703-125ba1374a12?w=900&auto=format&fit=crop&q=60",
  },
  {
    title: "General Ward",
    subtitle: "Inpatient Care",
    description:
      "General ward facilities for monitored inpatient treatment and recovery.",
    imageSrc:
      "https://images.unsplash.com/photo-1576765607924-1c8d9c2c0d8f?w=900&auto=format&fit=crop&q=60",
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
            cardHeight={320}
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

        <div className="hidden md:block mt-8">
          <TeamCarousel
            members={members}
            title="Departments"
            titleSize="md"
            titleColor="rgba(12, 74, 162, 1)"
            // mobile tuned sizes
            cardWidth={350}
            cardHeight={430}
            cardRadius={20}
            showArrows={true} // on mobile, prefer swipe
            showDots={false}
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
