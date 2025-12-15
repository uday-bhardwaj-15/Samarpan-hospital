import { Play, ArrowRight, Stethoscope, Users, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden flex items-end md:items-center">
        {/* Background Image */}
        <div
          className="
    absolute inset-0 
    bg-center bg-no-repeat 
    bg-contain md:bg-cover 
    bg-black
  "
          style={{
            backgroundImage: "url('/IMG_9943.jpg')",
          }}
        />

        {/* Pink Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b94198]/50 via-[#b94198]/30 to-[#b94198]/10" />

        {/* Dark + Light Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000]/20 via-transparent to-[#f3f4f6]/40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-10 md:py-32 w-full flex justify-center">
          <div className="max-w-3xl text-center">
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-white/25 backdrop-blur-lg rounded-full border border-white/40 shadow-lg">
              <p className="text-white text-sm font-medium flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Trusted by 50,000+ Patients
              </p>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl"
              style={{
                textShadow:
                  "0 10px 30px rgba(185, 65, 152, 0.5), 0 4px 6px rgba(0, 0, 0, 0.4)",
              }}
            >
              Your Health,
              <br />
              Our Priority
            </h1>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-white/95 mb-10 leading-relaxed font-light drop-shadow-lg"
              style={{ textShadow: "0 4px 12px rgba(0, 0, 0, 0.3)" }}
            >
              Experience world-class healthcare with expert nephrologists,
              modern facilities, and 24/7 patient support. Book your appointment
              today and take the first step towards better health.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap mb-12 justify-center">
              <button className="group px-8 py-4 bg-white text-[#b94198] font-semibold rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-base flex items-center gap-2 hover:gap-3 hover:bg-[#fff3f7]">
                Book Appointment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-md border-2 border-white/50 hover:border-white/70 flex items-center gap-2 text-base shadow-lg">
                <Play className="w-5 h-5" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
              {[
                { value: "500+", label: "Expert Doctors" },
                { value: "50K+", label: "Happy Patients" },
                { value: "24/7", label: "Support Available" },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p
                    className="text-3xl font-bold text-white drop-shadow-lg"
                    style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.2)" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-white/90 text-sm font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
