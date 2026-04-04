import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesPreview() {
  const services = [
    { title: "Facial", desc: "ดูแลผิวหน้า" },
    { title: "Botox", desc: "โบท็อกซ์" },
    { title: "Laser", desc: "เลเซอร์" },
  ];

  return (
    <section className="py-24 px-6">
      <SectionHeader 
        title="Services / บริการ"
        subtitle="Services"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}