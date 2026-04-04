import HeroBanner from "@/components/home/HeroBanner";
import StatBarSection from "@/components/home/StatBarSection";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <HeroBanner />

      {/* TRUST BAR */}
      <StatBarSection />

      {/* SERVICES */}
      <section className="py-32 px-6 bg-cream">
        <SectionHeader
          title="Our Services / บริการของเรา"
          subtitle="Services"
        />

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

      {/* ABOUT SECTION */}
      <section className="py-32 px-6 bg-white text-center">
        <SectionHeader
          title="About NYC Clinic / เกี่ยวกับเรา"
          subtitle="About"
        />

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          NYC Clinic is a luxury aesthetic clinic delivering personalized beauty
          treatments with expert care and modern technology.
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 mt-4 font-thai">
          NYC Clinic เป็นคลินิกความงามระดับพรีเมียม
          ที่ให้บริการด้วยเทคโนโลยีทันสมัย และทีมแพทย์ผู้เชี่ยวชาญ
        </p>
      </section>

      {/* REVIEWS */}
      <section className="py-32 px-6 bg-cream">
        <SectionHeader
          title="Client Reviews / รีวิวลูกค้า"
          subtitle="Reviews"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="glass-card p-6">
            <p>"Amazing experience, very professional."</p>
            <p className="text-sm text-gray-400 mt-2">
              ประทับใจมาก บริการดีมาก
            </p>
          </div>

          <div className="glass-card p-6">
            <p>"Highly recommended clinic."</p>
            <p className="text-sm text-gray-400 mt-2">แนะนำเลย คลินิกดีมาก</p>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="py-32 px-6 bg-navy text-center">
        <h2 className="font-heading text-4xl text-gold">
          Book Your Consultation
        </h2>

        <p className="text-gold-light mt-4">Start your beauty journey today</p>

        <p className="text-gold-light font-thai mt-2">
          เริ่มต้นการดูแลตัวเองวันนี้
        </p>

        <div className="mt-10">
          <button className="btn-primary">Contact Us / ติดต่อเรา</button>
        </div>
      </section>
    </main>
  );
}
