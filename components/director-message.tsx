"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function DirectorMessage() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://cdn.hexahealth.com/Image/webp/480x480/1731500065595-956405713.webp"
                  alt="Director"
                  className="w-40 h-40 rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message from Our Director
                </h3>
                <p className="text-gray-600 mb-4">
                  "At Samarpan Hospital, our mission is to make quality
                  healthcare accessible to everyone. We believe in
                  patient-centric care, utilizing cutting-edge technology, and
                  maintaining the highest standards of medical excellence. Our
                  dedicated team works tirelessly to ensure every patient
                  receives compassionate and personalized treatment."
                </p>
                <p className="text-gray-700 font-semibold">
                  Dr Gopesh Kumar Modi
                </p>
                <p className="text-gray-600 text-sm">
                  MBBS (AIIMS, New Delhi), MD (AIIMS), DM (Nephrology-AIIMS), BE
                  (Tufts Medical Centre,Boston,USA)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
