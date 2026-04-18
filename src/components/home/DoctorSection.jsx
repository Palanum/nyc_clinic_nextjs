"use client";

import DoctorCard from "../ui/DoctorCard";

const doctors = [
  {
    id: 1,
    category: "Dermatology",
    image: "/doctors/doc1.jpg",
    enName: "Dr. John Smith",
    thName: "นพ. จอห์น สมิธ",
    desc1: "Dermatology Specialist",
    desc2: "10+ years experience",
  },
  {
    id: 2,
    category: "Laser",
    image: "/doctors/doc2.jpg",
    enName: "Dr. Anna Lee",
    thName: "พญ. แอนนา ลี",
    desc1: "Laser & Skin Expert",
    desc2: "Certified specialist",
  },
  {
    id: 3,
    category: "Anti-aging",
    image: "/doctors/doc3.jpg",
    enName: "Dr. Mark Chen",
    thName: "นพ. มาร์ค เฉิน",
    desc1: "Anti-aging expert",
    desc2: "Botox & Filler",
    // details: [
    //   "Anti-aging Specialist",
    //   "Botox / Filler Expert",
    //   "12+ years experience",
    // ],
  },
];
export default function DoctorSection() {

  return (
    <section className="py-16 bg-bg-main">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display text-primary mb-2">
            Our Doctors
          </h2>
          <p className="text-sm text-text-muted">
            Meet our experienced medical team
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <DoctorCard
              key={doc.id}
              mode="summary"
              image={doc.image}
              enName={doc.enName}
              thName={doc.thName}
              desc1={doc.desc1}
              desc2={doc.desc2}
            />
          ))}
        </div>

      </div>
    </section>
  );
}