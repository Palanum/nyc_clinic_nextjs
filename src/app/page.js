import ContactSection from "@/components/home/ContactSection";
import DoctorSection from "@/components/home/DoctorSection";
import HeroBanner from "@/components/home/HeroBanner";
import ReviewSection from "@/components/home/ReviewSection";
import ServiceSection from "@/components/home/ServiceSection";
import StatBarSection from "@/components/home/StatBarSection";
import SignatureSection from "@/components/home/SignatureSection";

function HomePage() {
  return (
    <main>
      <HeroBanner />
      <StatBarSection />
      <SignatureSection />
      <ServiceSection />
      <DoctorSection />
      <ReviewSection />
      <ContactSection />
    </main>
  );
}

export default HomePage;
