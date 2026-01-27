import QuickActions from "@/components/quick-actions";
import InfrastructureSection from "@/components/infrastructure-section";
import DepartmentsSection from "@/components/departments-section";

import OurTeamSection from "@/components/our-team-section";
import SpecialtiesSection from "@/components/specialties-section";
import WhyChooseUs from "@/components/why-choose-us";
import BlogSection from "@/components/blog-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { DirectorMessage } from "@/components/director-message";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <QuickActions />
      <InfrastructureSection />
      <DepartmentsSection />
      <DirectorMessage />
      <OurTeamSection />
      <SpecialtiesSection />
      <WhyChooseUs />
      <BlogSection />
      <ContactForm />
    </main>
  );
}
