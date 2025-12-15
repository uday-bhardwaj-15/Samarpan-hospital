"use client";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 755 402 6900"],
      color: "#ec4899",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hospital.com", "support@hospital.com"],
      color: "#ec4899",
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Samarpan Hospital Kidney and Multispeciality Center, Plot No 34/35, Viceroy Park Rd, Anamika Nagar, Rohit Nagar, Bawadiya Kalan, Gulmohar Colony, Bhopal, Madhya Pradesh 462039",
      ],
      color: "#ec4899",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 5:30 PM", "Sun - Closed"],
      color: "#ec4899",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #ffffff 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ background: "rgba(236, 72, 153, 0.1)", color: "#be185d" }}
          >
            Get In Touch
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "#1a1a2e" }}
          >
            Contact <span style={{ color: "#ec4899" }}>Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need to schedule an appointment? We're here to
            help you with all your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                  }}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#1a1a2e" }}
                >
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                  }}
                >
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "#1a1a2e" }}
                  >
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "#ec4899" }}
                    />
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-12 py-6 rounded-xl border-2 focus:border-primary transition-colors"
                      style={{ borderColor: "#fce7f3" }}
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "#ec4899" }}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-12 py-6 rounded-xl border-2 focus:border-primary transition-colors"
                      style={{ borderColor: "#fce7f3" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "#ec4899" }}
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-12 py-6 rounded-xl border-2 focus:border-primary transition-colors"
                      style={{ borderColor: "#fce7f3" }}
                    />
                  </div>
                  <div className="relative">
                    <Building
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                      style={{ color: "#ec4899" }}
                    />
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="pl-12 py-6 rounded-xl border-2 focus:border-primary transition-colors"
                      style={{ borderColor: "#fce7f3" }}
                    />
                  </div>
                </div>

                <Textarea
                  name="message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
                  style={{ borderColor: "#fce7f3" }}
                />

                <Button
                  type="submit"
                  className="w-full py-6 rounded-xl font-semibold text-white text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                  }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <div className="bg-card rounded-3xl overflow-hidden shadow-xl h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5341975579477!2d77.4388768!3d23.187194899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43bcee391d45%3A0xd4fdab7bbe752ef!2sSamarpan%20Hospital%20Kidney%20and%20Multispeciality%20Center!5e0!3m2!1sen!2sin!4v1765798934593!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                ></iframe>
              </div>

              {/* Quick Contact Card */}
              <div
                className="rounded-3xl p-8 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Need Emergency Help?
                </h3>
                <p className="text-white/90 mb-6">
                  Our emergency team is available 24/7. Don't hesitate to reach
                  out for urgent medical assistance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Emergency: 911
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                    style={{ color: "#be185d" }}
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "rgba(236, 72, 153, 0.1)",
                color: "#be185d",
              }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#1a1a2e" }}
            >
              Frequently Asked{" "}
              <span style={{ color: "#ec4899" }}>Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I schedule an appointment?",
                answer:
                  "You can schedule an appointment by calling our office, using our online booking system, or visiting us in person. We recommend booking at least 24 hours in advance.",
              },
              {
                question: "What insurance plans do you accept?",
                answer:
                  "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, and United Healthcare. Please contact us to verify your specific coverage.",
              },
              {
                question: "What should I bring to my first appointment?",
                answer:
                  "Please bring your insurance card, a valid photo ID, a list of current medications, and any relevant medical records or test results.",
              },
              {
                question: "Do you offer telemedicine consultations?",
                answer:
                  "Yes, we offer telemedicine appointments for follow-up visits and certain types of consultations. Ask our staff about virtual appointment options.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#1a1a2e" }}
                >
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
