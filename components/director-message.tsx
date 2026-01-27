// "use client";

// import { Card, CardContent } from "@/components/ui/card";

// export default function DirectorMessage() {
//   return (
//     <section className="py-16 bg-blue-50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Card className="overflow-hidden">
//           <CardContent className="p-8 md:p-12">
//             <div className="flex flex-col md:flex-row gap-8 items-center">
//               <div className="flex-shrink-0">
//                 <img
//                   src="https://cdn.hexahealth.com/Image/webp/480x480/1731500065595-956405713.webp"
//                   alt="Director"
//                   className="w-40 h-40 rounded-lg object-cover"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   Message from Our Director
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   "At Samarpan Hospital, our mission is to make quality
//                   healthcare accessible to everyone. We believe in
//                   patient-centric care, utilizing cutting-edge technology, and
//                   maintaining the highest standards of medical excellence. Our
//                   dedicated team works tirelessly to ensure every patient
//                   receives compassionate and personalized treatment."
//                 </p>
//                 <p className="text-gray-700 font-semibold">
//                   Dr Gopesh Kumar Modi
//                 </p>
//                 <p className="text-gray-600 text-sm">
//                   MBBS (AIIMS, New Delhi), MD (AIIMS), DM (Nephrology-AIIMS), BE
//                   (Tufts Medical Centre,Boston,USA)
//                 </p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }
"use client";
export function DirectorMessage() {
  return (
    <section style={{ backgroundColor: "#ffffff" }} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          style={{ color: "#1e3a5f" }}
        >
          Message From Our Director
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://cdn.hexahealth.com/Image/webp/480x480/1731500065595-956405713.webp"
                alt="Dr. Gopesh Kumar Modi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="space-y-6">
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#4b5563" }}
            >
              Back in the day, we realised that just as innovation in medical
              science is elementary to the growth of healthcare, we need to
              bring innovation in how we take quality healthcare to everyone.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#4b5563" }}
            >
              We realised that it is not merely a transaction of health services
              between a patient and doctor. It is trust that fosters a healthy
              relationship in the journey of health.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#4b5563" }}
            >
              As we move with the times, we realise that technology has a huge
              role in making our services way more efficient. And by its
              application, way more human as well.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#4b5563" }}
            >
              We have a dream. Our dream is to be available to you round the
              clock, wherever you are and whenever you want. We want to be just
              one tap away from you, and this will be the beginning of
              consumer-centric healthcare.
            </p>

            {/* Signature */}
            <div className="pt-6 border-t" style={{ borderColor: "#e5e7eb" }}>
              <p
                className="text-lg font-medium italic mb-4"
                style={{ color: "#6b7280" }}
              >
                Take Care
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#1e3a5f" }}
              >
                Dr. Gopesh Kumar Modi
              </h3>
              <p
                className="text-sm md:text-base mt-1"
                style={{ color: "#6b7280" }}
              >
                MBBS (AIIMS, New Delhi), MD (AIIMS), DM (Nephrology-AIIMS), BE
                (Tufts Medical Centre, Boston, USA)
              </p>
              <p
                className="text-sm font-medium mt-2"
                style={{ color: "#2563eb" }}
              >
                Founder and Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
