import React from "react";

function StatBarSection() {
  return (
    <section className="bg-navy text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {[
          { num: "10+", label: "Years Experience", th: "ประสบการณ์" },
          { num: "5K+", label: "Happy Clients", th: "ลูกค้า" },
          { num: "20+", label: "Services", th: "บริการ" },
          { num: "100%", label: "Satisfaction", th: "ความพึงพอใจ" },
        ].map((item, i) => (
          <div
            key={i}
            className="py-12 border-r border-gold/10 last:border-none"
          >
            <h3 className="text-4xl font-heading text-primary">{item.num}</h3>

            <p className="text-xs tracking-widest text-gray-400 mt-2 uppercase">
              {item.label}
            </p>

            <p className="text-xs text-gray-500 font-thai-display">{item.th}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatBarSection;
