"use client";
import { useState } from "react";

import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    alt: "Hospital Reception",
    category: "Facility",
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800",
    alt: "Medical Team",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
    alt: "Modern Equipment",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    alt: "Patient Room",
    category: "Facility",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
    alt: "Doctor Consultation",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
    alt: "Hospital Building",
    category: "Facility",
  },
  {
    src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800",
    alt: "Laboratory",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
    alt: "Nursing Staff",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    alt: "Operation Theater",
    category: "Equipment",
  },
];

const categories = ["All", "Facility", "Team", "Equipment"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-[#b94198]/10 via-white to-[#b94198]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl text-[#666] max-w-3xl mx-auto">
            Take a visual tour of our modern facilities, dedicated medical team,
            and state-of-the-art equipment.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#b94198] text-white shadow-md"
                    : "bg-[#f5f5f5] text-[#666] hover:bg-[#b94198]/10 hover:text-[#b94198]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(image.src)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[#b94198] text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg">
                      {image.alt}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

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

export default Gallery;
