import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import DoctorSection from "@/components/home/DoctorSection";
import FeaturedServicesSection from "@/components/home/FeaturedServicesSection";
import HeroBanner from "@/components/home/HeroBanner";
import ResultSection from "@/components/home/ResultSection";
import ReviewSection from "@/components/home/ReviewSection";
import ServiceSection from "@/components/home/ServiceSection";
import StatBarSection from "@/components/home/StatBarSection";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <HeroBanner />

      {/* TRUST BAR */}
      <StatBarSection />

      {/* ABOUT SECTION */}
      {/* <AboutSection /> */}

      {/* Featured Services */}
      <FeaturedServicesSection />

      {/* SERVICES */}
      <ServiceSection />

      {/* Result - Before and After */}
      <ResultSection />

      {/* Doctor */}
      <DoctorSection />

      {/* REVIEWS */}
      <ReviewSection />

      {/* CTA / CONTACT */}
      <ContactSection />
    </main>
  );
}
