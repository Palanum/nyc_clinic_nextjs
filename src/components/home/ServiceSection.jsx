import React from "react";
import SectionHeader from "../ui/SectionHeader";

function ServiceSection() {
  return (
    <section className="py-32 px-6 bg-cream">
      <SectionHeader title="Our Services / บริการของเรา" subtitle="Services" />

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Facial Treatment",
            desc: "Advanced skin care",
            th: "ดูแลผิวหน้าอย่างล้ำลึก",
          },
          {
            title: "Botox & Filler",
            desc: "Enhance your beauty",
            th: "เสริมความงามอย่างเป็นธรรมชาติ",
          },
          {
            title: "Laser Therapy",
            desc: "Modern technology",
            th: "เทคโนโลยีเลเซอร์ทันสมัย",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="glass-card p-8 hover:scale-105 transition duration-300"
          >
            <h3 className="font-heading text-2xl text-navy">{s.title}</h3>

            <p className="text-gray-600 mt-3">{s.desc}</p>

            <p className="text-gray-400 mt-2 font-thai text-sm">{s.th}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
