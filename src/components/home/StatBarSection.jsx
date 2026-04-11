import React from "react";

const statList = [
  { num: "10+", label: "Years Experience", th: "ประสบการณ์" },
  { num: "5K+", label: "Cases Completed", th: "เคสที่ดูแลแล้ว" },
  { num: "20+", label: "Services", th: "บริการ" },
  { num: "100%", label: "Satisfaction", th: "ความพึงพอใจ" },
]

function StatBarSection() {
  return (
    <section className="bg-navy text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {statList.map((item, i) => (
          <div
            key={i}
            className="py-12 border-r border-gold/10 last:border-none"
          >
            <h3 className="text-4xl font-display text-primary">{item.num}</h3>

            <p className="text-xs font-body tracking-widest text-gray-400 mt-2 uppercase">
              {item.label}
            </p>

            <p className="text-xs text-gray-500 font-thai-body">{item.th}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatBarSection;
