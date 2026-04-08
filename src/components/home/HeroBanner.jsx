"use client";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-bg-main text-center overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -top-[100px] -left-[100px]" />

      <div className="relative z-10 px-6 flex flex-col items-center justify-center gap-2">
        <p className="font-display text-xl text-primary-dark">Aesthetic & Surgery Clinic</p>
        <h1 className="font-display text-hero my-0 hero-gradient tracking-luxury">
          NYC
        </h1>
        <p className="font-display text-lg tracking-widest text-primary">NEW YORK CLINIC,GR</p>
        <div className="text-center hero-divider my-2"></div>
        <p className="font-accent text-sm text-primary">Naturally Refined Beauty</p>
        <p className="font-thai-accent text-sm text-primary">เผยความงามในแบบที่เป็นคุณ อย่างสมดุลและเป็นธรรมชาติ</p>
      </div>
      <div className="absolute flex flex-col justify-center items-center bottom-0 mb-5 opacity-50">
        <span className="font-accent text-primary-dark">Explore</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
