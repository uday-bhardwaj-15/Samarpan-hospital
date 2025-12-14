"use client";

import React from "react";
import TeamCarousel from "@/components/lightswind/team-carousel"; // adjust path if needed
// import PlasmaGlobe from "@/components/plasma-globe";

const departmentCards = [
  {
    title: "Nephrology",
    subtitle: "Chronic Kidney Disease",
    description:
      "Kidney Transplant Planning and Follow Up, Acute Kidney Disease, Interventional Nephrology",
    imageSrc:
      "https://images.unsplash.com/photo-1618939304347-e91b1f33d2ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Dialysis Unit",
    subtitle: "Hemo Dialysis",
    description: "CAPD, Peritoneal Dialysis",
    imageSrc:
      "https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fERpYWx5c2lzJTIwVW5pdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Operation Theater",
    subtitle: "Kidney Biopsy",
    description:
      "AV Fistula Surgery, IJV/Femoral HD Catheterisation, IJV Permanent Tunneled HD Catheterisation",
    imageSrc:
      "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3BlcmF0aW9ufGVufDB8fDB8fHww",
  },
  {
    title: "Physiotherapy",
    subtitle: "Post Hospitalisation Care",
    description:
      "Stroke Rehabilitation, Post Trauma/Fracture Rehabilitation, AV Fistula Care Programme, Home Visit for Physiotherapy, Online Consultation, Call Now or Visit the Website",
    imageSrc:
      "https://images.unsplash.com/photo-1706353399656-210cca727a33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGh5c2lvdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Clinical Guidance and Diagnosis",
    subtitle: "Guidance for Complex Medical Decisions",
    description:
      "Evidence Based Medical Decisions, Evidence Based Practice, Diagnosis and Second Opinion",
    imageSrc:
      "https://images.unsplash.com/photo-1619691249147-c5689d88016b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlhZ25vc2lzfGVufDB8fDB8fHww",
  },
  {
    title: "Pharmacy",
    subtitle: "Post Hospitalisation Care",
    description:
      "Stroke Rehabilitation, Post Trauma/Fracture Rehabilitation, AV Fistula Care Programme, Home Delivery Medicine",
    imageSrc:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhhcm1hY3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Laboratory",
    subtitle: "Home Collection Available",
    description: "Contact Number:- 9826293340",
    imageSrc:
      "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Research",
    subtitle: "Indian Chronic Kidney Disease Research",
    description: "",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVzZWFyY2h8ZW58MHx8MHx8fDA%3D",
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
