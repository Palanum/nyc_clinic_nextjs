import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section className="py-32 px-6 bg-white text-center">
      <SectionHeader title="About NYC Clinic / เกี่ยวกับเรา" subtitle="About" />

      <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
        NYC Clinic is a luxury aesthetic clinic delivering personalized beauty
        treatments with expert care and modern technology.
      </p>

      <p className="max-w-3xl mx-auto text-gray-500 mt-4 font-thai">
        NYC Clinic เป็นคลินิกความงามระดับพรีเมียม
        ที่ให้บริการด้วยเทคโนโลยีทันสมัย และทีมแพทย์ผู้เชี่ยวชาญ
      </p>
    </section>
  );
}
