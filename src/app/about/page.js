import SectionHeader from "@/components/ui/SectionHeader";


export default function About() {
  return (
    <section className="py-24 px-6 bg-cream">
      <SectionHeader
        title="About Us / เกี่ยวกับเรา"
        subtitle="About"
      />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p>
          NYC Clinic is a premium aesthetic clinic focusing on beauty and confidence.
        </p>

        <p className="font-thai-display">
          NYC Clinic เป็นคลินิกความงามระดับพรีเมียม ที่มุ่งเน้นการเสริมสร้างความมั่นใจ
        </p>
      </div>
    </section>
  );
}