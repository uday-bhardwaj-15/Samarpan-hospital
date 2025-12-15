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

const departments = [
  {
    name: "Nephrology & Kidney Care",
    description:
      "Comprehensive kidney care including dialysis, transplant evaluation, and treatment for all kidney diseases.",
    doctors: 5,
    highlight: true,
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    fullDescription:
      "Our Nephrology department offers state-of-the-art kidney care services including advanced dialysis treatments, kidney transplant evaluations, and comprehensive management of chronic kidney disease. Our team of specialists uses the latest technology to provide personalized treatment plans.",
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
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&h=300&fit=crop",
    fullDescription:
      "Our Cardiology department provides comprehensive cardiac care from prevention to advanced interventions. We specialize in treating heart diseases with cutting-edge technology and compassionate care.",
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
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
    fullDescription:
      "Our Neurology department offers expert diagnosis and treatment for all neurological conditions including stroke, epilepsy, Parkinson's disease, and multiple sclerosis with advanced neuroimaging facilities.",
    facilities: [
      "EEG Lab",
      "EMG/NCS Unit",
      "Stroke Unit",
      "Neuro Rehabilitation",
    ],
  },
  {
    name: "Orthopedics",
    description:
      "Joint replacements, sports medicine, and comprehensive musculoskeletal care.",
    doctors: 4,
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=300&fit=crop",
    fullDescription:
      "Our Orthopedic department specializes in treating bone, joint, and muscle conditions. From sports injuries to joint replacements, our experienced surgeons use minimally invasive techniques for faster recovery.",
    facilities: [
      "Joint Replacement Center",
      "Sports Medicine Clinic",
      "Spine Surgery Unit",
      "Physiotherapy Center",
    ],
  },
  {
    name: "Pediatrics",
    description:
      "Complete child healthcare from newborn care to adolescent medicine.",
    doctors: 3,
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop",
    fullDescription:
      "Our Pediatrics department provides comprehensive healthcare for children from birth through adolescence. Our child-friendly environment and specialized pediatric team ensure the best care for your little ones.",
    facilities: [
      "Neonatal ICU",
      "Pediatric ICU",
      "Child Development Center",
      "Vaccination Clinic",
    ],
  },
  {
    name: "Ophthalmology",
    description:
      "Advanced eye care including cataract surgery, glaucoma treatment, and retinal services.",
    doctors: 2,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
    fullDescription:
      "Our Ophthalmology department offers comprehensive eye care services using the latest laser technology and surgical techniques. From routine eye exams to complex retinal surgeries, we provide exceptional vision care.",
    facilities: [
      "Laser Eye Surgery",
      "Retina Clinic",
      "Glaucoma Center",
      "Pediatric Eye Care",
    ],
  },
  {
    name: "General Medicine",
    description:
      "Primary care and treatment for a wide range of medical conditions.",
    doctors: 6,
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&h=300&fit=crop",
    fullDescription:
      "Our General Medicine department serves as the first point of contact for patients, providing comprehensive diagnosis and treatment for various health conditions while coordinating specialized care when needed.",
    facilities: [
      "Outpatient Clinic",
      "Health Checkup Center",
      "Diabetes Management",
      "Hypertension Clinic",
    ],
  },
  {
    name: "Gastroenterology",
    description:
      "Digestive health specialists treating liver, stomach, and intestinal disorders.",
    doctors: 2,
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
    fullDescription:
      "Our Gastroenterology department specializes in diagnosing and treating disorders of the digestive system including liver diseases, inflammatory bowel disease, and gastrointestinal cancers.",
    facilities: [
      "Endoscopy Suite",
      "Liver Clinic",
      "IBD Center",
      "Motility Lab",
    ],
  },
  {
    name: "Emergency Care",
    description:
      "24/7 emergency services with trauma care and critical response team.",
    doctors: 8,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
    fullDescription:
      "Our Emergency department operates round the clock with a dedicated trauma team ready to handle any medical emergency. Equipped with advanced life support systems and rapid response protocols.",
    facilities: [
      "24/7 Trauma Center",
      "Critical Care Unit",
      "Ambulance Services",
      "Poison Control",
    ],
  },
];

const Departments = () => {
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
      {/* Navigation */}

      {/* Hero Section */}
      <section
        style={{
          paddingTop: "96px",
          paddingBottom: "48px",
          background:
            "linear-gradient(135deg, rgba(185,65,152,0.1) 0%, #ffffff 50%, rgba(185,65,152,0.05) 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "bold",
              color: "#1a1a2e",
              marginBottom: "16px",
            }}
          >
            Our Departments
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto 32px",
            }}
          >
            World-class medical departments staffed with experienced specialists
            committed to your health and well-being.
          </p>

          {/* Search Bar */}
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Search
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#999",
                width: "20px",
                height: "20px",
              }}
            />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 48px",
                fontSize: "16px",
                border: "2px solid #e5e5e5",
                borderRadius: "50px",
                outline: "none",
                transition: "all 0.3s ease",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#b94198";
                e.target.style.boxShadow = "0 4px 20px rgba(185,65,152,0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e5e5e5";
                e.target.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#999",
                }}
              >
                <X style={{ width: "20px", height: "20px" }} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section style={{ padding: "64px 0" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          {filteredDepartments.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p style={{ fontSize: "18px", color: "#666" }}>
                No departments found matching "{searchQuery}"
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "32px",
              }}
            >
              {filteredDepartments.map((dept, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    border: dept.highlight ? "2px solid #b94198" : "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(185,65,152,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                >
                  {dept.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        backgroundColor: "#b94198",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "600",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        zIndex: 10,
                      }}
                    >
                      Specialty
                    </div>
                  )}

                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={dept.image}
                      alt={dept.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "60%",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "16px",
                        left: "20px",
                        right: "20px",
                      }}
                    >
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          fontWeight: "bold",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {dept.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "20px" }}>
                    <p
                      style={{
                        color: "#666",
                        lineHeight: "1.6",
                        marginBottom: "16px",
                        fontSize: "14px",
                      }}
                    >
                      {dept.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          backgroundColor: "#f5f5f5",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "13px",
                          color: "#666",
                        }}
                      >
                        👨‍⚕️ {dept.doctors} Specialists
                      </span>
                      <button
                        onClick={() => setSelectedDept(dept)}
                        style={{
                          background:
                            "linear-gradient(135deg, #b94198 0%, #d169b5 100%)",
                          color: "#fff",
                          border: "none",
                          padding: "10px 20px",
                          borderRadius: "25px",
                          fontSize: "14px",
                          fontWeight: "600",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 15px rgba(185,65,152,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={!!selectedDept} onOpenChange={() => setSelectedDept(null)}>
        <DialogContent
          style={{
            maxWidth: "600px",
            padding: 0,
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          {selectedDept && (
            <>
              <div style={{ position: "relative", height: "220px" }}>
                <img
                  src={selectedDept.image}
                  alt={selectedDept.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "24px",
                    right: "24px",
                  }}
                >
                  <DialogHeader>
                    <DialogTitle
                      style={{
                        color: "#fff",
                        fontSize: "24px",
                        marginBottom: "4px",
                      }}
                    >
                      {selectedDept.name}
                    </DialogTitle>
                    <DialogDescription
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {selectedDept.doctors} Expert Specialists
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </div>

              <div style={{ padding: "24px" }}>
                <p
                  style={{
                    color: "#555",
                    lineHeight: "1.7",
                    marginBottom: "20px",
                  }}
                >
                  {selectedDept.fullDescription}
                </p>

                <h4
                  style={{
                    color: "#1a1a2e",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  Our Facilities
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "10px",
                  }}
                >
                  {selectedDept.facilities.map((facility, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 14px",
                        backgroundColor: "rgba(185,65,152,0.08)",
                        borderRadius: "10px",
                        fontSize: "14px",
                        color: "#333",
                      }}
                    >
                      <span style={{ color: "#b94198" }}>✓</span>
                      {facility}
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    width: "100%",
                    marginTop: "24px",
                    background:
                      "linear-gradient(135deg, #b94198 0%, #d169b5 100%)",
                    color: "#fff",
                    border: "none",
                    padding: "14px",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, #b94198 0%, #d169b5 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: "bold",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Need a Consultation?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "18px",
              marginBottom: "32px",
            }}
          >
            Our specialists are ready to help. Book an appointment today.
          </p>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#b94198",
              fontWeight: "600",
              padding: "16px 40px",
              borderRadius: "50px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#1a1a2e", color: "#fff", padding: "32px 0" }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.6)" }}>
            © 2024 Samarpan Hospital & Kidney Care Center. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Departments;
