"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  { number: "41+", label: "Years of Excellence" },
  { number: "12.5k+", label: "Happy Patients" },
  { number: "8.7M+", label: "Surgeries Performed" },
  { number: "400+", label: "Expert Doctors" },
]

const features = [
  "Patient-centric care approach",
  "Advanced medical technology",
  "Expert and qualified doctors",
  "Affordable treatment plans",
  " 24/7 customer support",
  "Transparent pricing",
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose SeamlessHealth</h2>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{reason.number}</div>
                <p className="text-gray-600">{reason.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src="/hospital-patient-care.jpg" alt="Why choose us" className="rounded-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Exceptional Care, Every Time</h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
