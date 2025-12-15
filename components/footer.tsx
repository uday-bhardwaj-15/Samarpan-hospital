import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "rgba(236, 72, 153, 0.2)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#ec4899" }} />
                </div>
                <div>
                  <p className="text-gray-300">
                    Samarpan Hospital Kidney and Multispeciality Center, Plot No
                    34/35, Viceroy Park Rd, Anamika Nagar, Rohit Nagar, Bawadiya
                    Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462039
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "rgba(236, 72, 153, 0.2)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "#ec4899" }} />
                </div>
                <div>
                  <p className="text-gray-300">+91 755 402 6900</p>
                  {/* <p className="text-gray-400">Emergency: +1 (555) 911-0000</p> */}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "rgba(236, 72, 153, 0.2)" }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#ec4899" }} />
                </div>
                <p className="text-gray-300">info@medicalhospital.com</p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "rgba(236, 72, 153, 0.2)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "#ec4899" }} />
                </div>
                <div>
                  <p className="text-gray-300">Mon - Sat: 8:00 AM - 5:30 PM</p>
                  <p className="text-gray-400">Sun - Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Departments", path: "/departments" },
                { name: "Our Doctors", path: "/doctors" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#ec4899" }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Departments</h3>
            <ul className="space-y-3">
              {[
                "Cardiology",
                "Neurology",
                "Orthopedics",
                "Pediatrics",
                "Emergency Care",
                "Oncology",
              ].map((dept) => (
                <li key={dept}>
                  <Link
                    href="/departments"
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#ec4899" }}
                    />
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for health tips and hospital updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
              />
              <button
                className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                }}
              >
                Subscribe
              </button>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-lg bg-white/10 hover:bg-pink-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Medical Hospital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
