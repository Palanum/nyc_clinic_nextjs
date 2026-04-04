import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 bg-cream">
      <SectionHeader 
        title="About Us / เกี่ยวกับเรา"
        subtitle="About"
      />

      <p className="max-w-3xl mx-auto text-center text-gray-600">
        We provide premium aesthetic services.
        <br />
        เราให้บริการด้านความงามระดับพรีเมียม
      </p>
    </section>
  );
}