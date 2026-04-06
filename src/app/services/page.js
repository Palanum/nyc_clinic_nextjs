import SectionHeader from "@/components/ui/SectionHeader";


export default function Services() {
  const services = [
    { name: "Facial", th: "ดูแลผิวหน้า" },
    { name: "Botox", th: "โบท็อกซ์" },
    { name: "Laser", th: "เลเซอร์" },
  ];

  return (
    <section className="py-24 px-6">
      <SectionHeader
        title="Our Services / บริการของเรา"
        subtitle="Services"
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="glass-card p-6">
            <h3 className="font-heading text-xl">
              {s.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {s.th}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}