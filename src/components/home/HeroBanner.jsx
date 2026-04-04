"use client";

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-bg-main text-center overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -top-[100px] -left-[100px]" />

      <div className="relative z-10 px-6">
        <h1 className="font-display text-hero text-primary tracking-luxury">
          NYC
        </h1>

        <p className="text-primary-light mt-4">Beauty Redefined</p>

        <p className="font-thai-sans text-sm text-primary-light">
          ความงามที่ถูกนิยามใหม่
        </p>
      </div>
    </section>
  );
}
