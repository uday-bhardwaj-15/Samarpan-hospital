"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ---------------- DATA ---------------- */

const departments = [
  {
    name: "Nephrology & Kidney Care",
    description:
      "Comprehensive kidney care including dialysis, transplant evaluation, and treatment for all kidney diseases.",
    doctors: 5,
    highlight: true,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&fit=crop",
    fullDescription:
      "Our Nephrology department offers state-of-the-art kidney care services including advanced dialysis treatments, kidney transplant evaluations, and comprehensive management of chronic kidney disease.",
    facilities: [
      "24/7 Dialysis Unit",
      "Transplant Evaluation Center",
      "Kidney Biopsy Lab",
      "Pediatric Nephrology",
    ],
  },
  {
    name: "Cardiology",
    description:
      "Expert heart care with advanced diagnostics, interventional procedures, and cardiac rehabilitation.",
    doctors: 4,
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=800&fit=crop",
    fullDescription:
      "Our Cardiology department provides comprehensive cardiac care from prevention to advanced interventions.",
    facilities: [
      "Cardiac Catheterization Lab",
      "Echocardiography",
      "Cardiac Rehabilitation",
      "Heart Failure Clinic",
    ],
  },
  {
    name: "Neurology",
    description:
      "Specialized care for brain and nervous system disorders with modern diagnostic facilities.",
    doctors: 3,
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&fit=crop",
    fullDescription:
      "Expert diagnosis and treatment for stroke, epilepsy, Parkinson’s disease, and neurological disorders.",
    facilities: [
      "EEG Lab",
      "Stroke Unit",
      "Neuro Rehabilitation",
      "Advanced Imaging",
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Departments() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<
    (typeof departments)[0] | null
  >(null);

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fafafa" }}>
      {/* HERO */}
      <section
        className="pt-32 pb-16 px-4"
        style={{
          background: "linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%)",
        }}
      >
        <div className="container mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(236, 72, 153, 0.1)", color: "#be185d" }}
          >
            World-Class Medical Care
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "#1a1a2e" }}
          >
            Our <span style={{ color: "#ec4899" }}>Departments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            World-class medical departments with experienced specialists
            dedicated to your health.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: "#999" }}
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search departments..."
              className="w-full py-4 px-12 rounded-full border-2 focus:outline-none focus:border-[#ec4899] transition-colors"
              style={{ borderColor: "#e5e5e5" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ padding: "48px 0" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 16px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {filteredDepartments.map((dept, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ height: "180px", position: "relative" }}>
                <img
                  src={dept.image}
                  alt={dept.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                  }}
                />
              </div>

              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "600" }}>
                  {dept.name}
                </h3>
                <p
                  style={{ fontSize: "14px", color: "#666", margin: "12px 0" }}
                >
                  {dept.description}
                </p>

                <button
                  onClick={() => setSelectedDept(dept)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg,#b94198,#d169b5)",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <Dialog open={!!selectedDept} onOpenChange={() => setSelectedDept(null)}>
        <DialogContent
          style={{
            width: "95vw",
            maxWidth: "600px",
            maxHeight: "90vh",
            padding: 0,
            overflowY: "auto",
            borderRadius: "20px",
          }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedDept(null)}
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 50,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderRadius: "50%",
              padding: "6px",
            }}
          >
            <X size={18} />
          </button>

          {selectedDept && (
            <>
              <div style={{ height: "180px" }}>
                <img
                  src={selectedDept.image}
                  alt={selectedDept.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div style={{ padding: "20px" }}>
                <DialogHeader>
                  <DialogTitle>{selectedDept.name}</DialogTitle>
                  <DialogDescription>
                    {selectedDept.doctors} Specialists
                  </DialogDescription>
                </DialogHeader>

                <p style={{ margin: "16px 0", color: "#555" }}>
                  {selectedDept.fullDescription}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg,#b94198,#d169b5)",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
