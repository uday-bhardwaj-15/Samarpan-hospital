"use client"

import { ThreeDImageCarousel } from "@/components/three-d-carousel"

const blogs = [
  {
    id: 1,
    title: "5 Ways to Maintain Heart Health",
    brand: "Health Tips",
    description:
      "Learn essential tips and lifestyle changes to keep your heart healthy and prevent cardiovascular diseases.",
    tags: ["Cardiology", "Wellness", "Tips"],
    imageUrl: "/healthy-heart-lifestyle.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Joint Pain: Causes and Treatment",
    brand: "Medical Guide",
    description: "Understanding joint pain, its causes, and various treatment options available for relief.",
    tags: ["Orthopedics", "Treatment", "Guide"],
    imageUrl: "/joint-pain-treatment.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Mental Health Matters",
    brand: "Mental Wellness",
    description: "Breaking stigma around mental health and promoting psychological well-being.",
    tags: ["Mental Health", "Wellness", "Support"],
    imageUrl: "/mental-health-wellness.png",
    link: "#",
  },
  {
    id: 4,
    title: "Diabetes Management Guide",
    brand: "Chronic Care",
    description: "Complete guide to managing diabetes through proper diet, exercise, and medication.",
    tags: ["Diabetes", "Management", "Care"],
    imageUrl: "/diabetes-management-health.jpg",
    link: "#",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Health Articles & Blog</h2>
          <p className="text-gray-600">Expert insights and health tips from our medical professionals</p>
        </div>

        <ThreeDImageCarousel items={blogs} autoRotate={true} rotateInterval={6000} cardHeight={450} />
      </div>
    </section>
  )
}
