"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Calendar,
  Award,
  GraduationCap,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  education: string;
  rating: number;
  reviews: number;
  availability: string;
  phone: string;
  email: string;
  bio: string;
  specializations: string[];
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    experience: "15+ Years",
    education: "Harvard Medical School",
    rating: 4.9,
    reviews: 284,
    availability: "Mon - Fri",
    phone: "+1 (555) 123-4567",
    email: "dr.johnson@hospital.com",
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating complex cardiovascular conditions. She specializes in interventional cardiology and heart failure management.",
    specializations: [
      "Interventional Cardiology",
      "Heart Failure",
      "Preventive Cardiology",
      "Cardiac Imaging",
    ],
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    experience: "12+ Years",
    education: "Johns Hopkins University",
    rating: 4.8,
    reviews: 196,
    availability: "Mon - Thu",
    phone: "+1 (555) 234-5678",
    email: "dr.chen@hospital.com",
    bio: "Dr. Michael Chen is an expert in neurological disorders with a focus on stroke prevention and treatment. He has pioneered several innovative treatment protocols.",
    specializations: [
      "Stroke Treatment",
      "Epilepsy",
      "Movement Disorders",
      "Headache Medicine",
    ],
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
    experience: "10+ Years",
    education: "Stanford University",
    rating: 4.9,
    reviews: 342,
    availability: "Mon - Sat",
    phone: "+1 (555) 345-6789",
    email: "dr.rodriguez@hospital.com",
    bio: "Dr. Emily Rodriguez is passionate about children's health and development. She provides comprehensive pediatric care from newborns to adolescents.",
    specializations: [
      "Newborn Care",
      "Child Development",
      "Vaccinations",
      "Adolescent Medicine",
    ],
  },
  {
    id: 4,
    name: "Dr. James Williams",
    specialty: "Orthopedic Surgeon",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    experience: "18+ Years",
    education: "Yale School of Medicine",
    rating: 4.7,
    reviews: 215,
    availability: "Tue - Fri",
    phone: "+1 (555) 456-7890",
    email: "dr.williams@hospital.com",
    bio: "Dr. James Williams is a renowned orthopedic surgeon specializing in sports medicine and joint replacement surgery with minimally invasive techniques.",
    specializations: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Trauma Care",
    ],
  },
  {
    id: 5,
    name: "Dr. Amanda Foster",
    specialty: "Dermatologist",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face",
    experience: "8+ Years",
    education: "Columbia University",
    rating: 4.8,
    reviews: 178,
    availability: "Mon - Wed",
    phone: "+1 (555) 567-8901",
    email: "dr.foster@hospital.com",
    bio: "Dr. Amanda Foster specializes in medical and cosmetic dermatology, helping patients achieve healthy and beautiful skin through advanced treatments.",
    specializations: [
      "Medical Dermatology",
      "Cosmetic Procedures",
      "Skin Cancer",
      "Laser Treatments",
    ],
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "Oncologist",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face",
    experience: "20+ Years",
    education: "Mayo Clinic",
    rating: 4.9,
    reviews: 267,
    availability: "Mon - Fri",
    phone: "+1 (555) 678-9012",
    email: "dr.kim@hospital.com",
    bio: "Dr. Robert Kim is a leading oncologist with extensive experience in treating various types of cancer using the latest therapies and personalized treatment plans.",
    specializations: [
      "Breast Cancer",
      "Lung Cancer",
      "Immunotherapy",
      "Clinical Trials",
    ],
  },
  {
    id: 7,
    name: "Dr. Lisa Thompson",
    specialty: "Gynecologist",
    image:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop&crop=face",
    experience: "14+ Years",
    education: "Duke University",
    rating: 4.8,
    reviews: 312,
    availability: "Mon - Sat",
    phone: "+1 (555) 789-0123",
    email: "dr.thompson@hospital.com",
    bio: "Dr. Lisa Thompson provides comprehensive women's healthcare services with a focus on preventive care, fertility treatments, and minimally invasive surgeries.",
    specializations: [
      "Obstetrics",
      "Fertility",
      "Minimally Invasive Surgery",
      "Menopause Management",
    ],
  },
  {
    id: 8,
    name: "Dr. David Martinez",
    specialty: "Psychiatrist",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    experience: "11+ Years",
    education: "UCLA Medical Center",
    rating: 4.7,
    reviews: 145,
    availability: "Tue - Sat",
    phone: "+1 (555) 890-1234",
    email: "dr.martinez@hospital.com",
    bio: "Dr. David Martinez is dedicated to mental health and wellness, providing compassionate care for patients dealing with anxiety, depression, and other mental health conditions.",
    specializations: [
      "Anxiety Disorders",
      "Depression",
      "PTSD",
      "Addiction Medicine",
    ],
  },
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [filterSpecialty, setFilterSpecialty] = useState("");

  const specialties = [...new Set(doctors.map((d) => d.specialty))];

  const filteredDoctors = filterSpecialty
    ? doctors.filter((d) => d.specialty === filterSpecialty)
    : doctors;

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(236, 72, 153, 0.1)", color: "#be185d" }}
          >
            Expert Medical Team
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "#1a1a2e" }}
          >
            Meet Our <span style={{ color: "#ec4899" }}>Doctors</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified and experienced doctors are committed
            to providing exceptional healthcare services.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilterSpecialty("")}
              className="px-6 py-2 rounded-full font-medium transition-all duration-300"
              style={{
                background: !filterSpecialty
                  ? "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
                  : "white",
                color: !filterSpecialty ? "white" : "#374151",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              All Doctors
            </button>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setFilterSpecialty(specialty)}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    filterSpecialty === specialty
                      ? "linear-gradient(135deg, #ec4899 0%, #be185d 100%)"
                      : "white",
                  color: filterSpecialty === specialty ? "white" : "#374151",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <div
                key={doctor.id + index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeUp 0.6s ease-out forwards",
                }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(190, 24, 93, 0.8), transparent)",
                    }}
                  />
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={`tel:${doctor.phone}`}
                      className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Phone className="w-5 h-5" style={{ color: "#ec4899" }} />
                    </a>
                    <a
                      href={`mailto:${doctor.email}`}
                      className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Mail className="w-5 h-5" style={{ color: "#ec4899" }} />
                    </a>
                    <button className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
                      <Calendar
                        className="w-5 h-5"
                        style={{ color: "#ec4899" }}
                      />
                    </button>
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">
                      {doctor.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{
                      background: "rgba(236, 72, 153, 0.1)",
                      color: "#be185d",
                    }}
                  >
                    {doctor.specialty}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#1a1a2e" }}
                  >
                    {doctor.name}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" style={{ color: "#ec4899" }} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" style={{ color: "#ec4899" }} />
                      <span>{doctor.availability}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <GraduationCap
                      className="w-4 h-4"
                      style={{ color: "#ec4899" }}
                    />
                    <span>{doctor.education}</span>
                  </div>

                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                    }}
                  >
                    View Profile
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile Modal */}
      <Dialog
        open={!!selectedDoctor}
        onOpenChange={() => setSelectedDoctor(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedDoctor && (
            <>
              <DialogHeader>
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                      style={{
                        background: "rgba(236, 72, 153, 0.1)",
                        color: "#be185d",
                      }}
                    >
                      {selectedDoctor.specialty}
                    </div>
                    <DialogTitle className="text-2xl mb-2">
                      {selectedDoctor.name}
                    </DialogTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>
                          {selectedDoctor.rating} ({selectedDoctor.reviews}{" "}
                          reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award
                          className="w-4 h-4"
                          style={{ color: "#ec4899" }}
                        />
                        <span>{selectedDoctor.experience}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div>
                  <h4
                    className="font-semibold mb-2"
                    style={{ color: "#1a1a2e" }}
                  >
                    About
                  </h4>
                  <DialogDescription className="text-gray-600">
                    {selectedDoctor.bio}
                  </DialogDescription>
                </div>

                <div>
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "#1a1a2e" }}
                  >
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDoctor.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          background: "rgba(236, 72, 153, 0.1)",
                          color: "#be185d",
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "#1a1a2e" }}
                  >
                    Contact Information
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Phone className="w-5 h-5" style={{ color: "#ec4899" }} />
                      <span>{selectedDoctor.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5" style={{ color: "#ec4899" }} />
                      <span>{selectedDoctor.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5" style={{ color: "#ec4899" }} />
                      <span>Available: {selectedDoctor.availability}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <GraduationCap
                        className="w-5 h-5"
                        style={{ color: "#ec4899" }}
                      />
                      <span>{selectedDoctor.education}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Doctors;
