'use client";';
import { ArrowRight, Sparkles, Heart, Shield, Clock } from "lucide-react";

// Animated Wave Component
function AnimatedWave({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#b94198"
          fillOpacity="0.15"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,144C672,160,768,160,864,144C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
        <path
          fill="#b94198"
          fillOpacity="0.25"
          d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,144C672,128,768,128,864,144C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,176C672,192,768,192,864,176C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
        <path
          fill="#b94198"
          fillOpacity="0.35"
          d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,208C672,224,768,224,864,208C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </path>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50 overflow-hidden">
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Image Section at Top */}
        <div className="relative mb-16 group">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl border border-pink-200">
            <AnimatedWave className="!relative !z-0" />
            <div className="absolute inset-0 z-10">
              <img
                src="/IMG_9943.jpg"
                alt="Healthcare"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                style={{ objectPosition: "center 30%" }} // 30% from top, slightly down
              />
            </div>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20" /> */}

            {/* Floating Badge on Image */}
            <div className="absolute top-6 right-6 z-30 bg-white shadow-lg px-5 py-3 rounded-full animate-bounce border border-pink-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-bold text-gray-800">
                  Premium Healthcare
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-pink-100 rounded-full border border-pink-200">
              <div className="w-2 h-2 bg-[#b94198] rounded-full animate-pulse" />
              <span className="text-[#b94198] text-sm font-semibold">
                50,000+ Trusted Patients
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-gray-900">Transform Your</span>
              <br />
              <span className="bg-[#b94198] bg-clip-text text-transparent">
                Health Journey
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Experience cutting-edge nephrology care with AI-powered
              diagnostics, world-class specialists, and 24/7 personalized
              support at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-[#b94198]  rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-8 py-4 bg-white rounded-xl font-bold text-gray-800 border-2 border-gray-200 hover:border-pink-300 transition-all duration-300 hover:bg-pink-50 shadow-sm">
                Learn More
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Heart, value: "500+", label: "Specialists" },
                { icon: Shield, value: "98%", label: "Success Rate" },
                { icon: Clock, value: "24/7", label: "Support" },
              ].map((item, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition duration-300" />
                  <div className="relative bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-300">
                    <item.icon className="w-6 h-6 text-pink-600 mb-2" />
                    <p className="text-2xl font-bold text-gray-900">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-4">
            {[
              {
                title: "AI-Powered Diagnosis",
                desc: "Advanced algorithms for accurate results",
                color: "from-pink-500 to-rose-500",
              },
              {
                title: "Expert Nephrologists",
                desc: "Top-rated specialists in kidney care",
                color: "from-purple-500 to-indigo-500",
              },
              {
                title: "Modern Facilities",
                desc: "State-of-the-art medical equipment",
                color: "from-blue-500 to-cyan-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500`}
                />
                <div className="relative bg-white p-6 rounded-2xl border border-gray-200 group-hover:border-pink-300 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <div className="mt-4 w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-24 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <AnimatedWave />
      </div>
    </div>
  );
}
