export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <p className="text-gold tracking-[0.4em] text-xs uppercase">
        {subtitle}
      </p>

      <h2 className="font-heading text-4xl text-navy mt-4">
        {title}
      </h2>
    </div>
  );
}