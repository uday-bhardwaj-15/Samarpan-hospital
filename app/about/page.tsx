import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";

import { Heart, Users, Award, Target } from "lucide-react";

const timelineEvents = [
  {
    year: "2024",
    title: "Advanced Kidney Care Unit",
    subtitle: "Samarpan Hospital",
    description:
      "Launched state-of-the-art dialysis center with 20+ machines and 24/7 nephrologist availability.",
  },
  {
    year: "2022",
    title: "Multi-Specialty Expansion",
    subtitle: "Samarpan Hospital",
    description:
      "Added cardiology, neurology, and orthopedic departments with renowned specialists joining our team.",
  },
  {
    year: "2019",
    title: "100-Bed Facility",
    subtitle: "Samarpan Hospital",
    description:
      "Expanded to a 100-bed facility with modern ICU, NICU, and emergency care services.",
  },
  {
    year: "2015",
    title: "Foundation Year",
    subtitle: "Samarpan Hospital",
    description:
      "Established with a vision to provide affordable, quality healthcare to all. Started with 30 beds.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, dignity, and respect.",
  },
  {
    icon: Users,
    title: "Patient First",
    description: "Your health and well-being are our top priorities.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards in medical care.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing modern technology for better outcomes.",
  },
];

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-[#b94198]/10 via-white to-[#b94198]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            About Samarpan Hospital
          </h1>
          <p className="text-lg md:text-xl text-[#666] max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare with compassion,
            expertise, and cutting-edge technology since 2015.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gradient-to-br from-[#b94198] to-[#d169b5] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/90 leading-relaxed">
                To deliver comprehensive, affordable, and compassionate
                healthcare services to our community. We strive to be the most
                trusted healthcare partner for families, providing preventive
                care, treatment, and rehabilitation with excellence.
              </p>
            </div>
            <div className="bg-[#1a1a2e] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/80 leading-relaxed">
                To be recognized as the leading healthcare institution in the
                region, known for clinical excellence, patient-centered care,
                and innovative medical solutions that transform lives and build
                healthier communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-[#b94198]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#b94198]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#666] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollTimeline
            events={timelineEvents}
            title="Our Journey"
            subtitle="Scroll to explore our milestones"
            progressIndicator={true}
            cardAlignment="alternating"
            revealAnimation="fade"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/60">
            © 2024 Samarpan Hospital & Kidney Care Center. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default AboutUs;
