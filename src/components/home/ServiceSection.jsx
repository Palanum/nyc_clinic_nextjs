"use client";

import ServiceCard, {
  ServiceCardBody,
  ServiceCardCategory,
  ServiceCardDescription,
  ServiceCardImage,
  ServiceCardLink,
  ServiceCardTitle,
} from "@/components/ui/ServiceCard";

const services = [
  {
    category: "Nose Thread Lift",
    title: "Nose Thread Lift",
    thTitle: "ร้อยไหมจมูก",
    description:
      "Semi-surgical technique for natural nose elevation and definition. Stimulate collagen, no downtime.",
    icon: "✦",
    imageVariant: "default",
    variant: "accent",
    badge: "SIGNATURE",
    href: "/services/nose-thread-lift",
  },
  {
    category: "Facial Thread Lift",
    title: "Facial Thread Lift",
    thTitle: "ร้อยไหมหน้า",
    description:
      "Lift, tighten, and contour your face. Stimulate collagen for firmer, youthful skin without surgery.",
    icon: "◇",
    imageVariant: "alt1",
    href: "/services/facial-thread-lift",
  },
  {
    category: "Facial Design",
    title: "Facial Design & Lifting",
    thTitle: "ปรับรูปหน้า ฟิลเลอร์ & กระชับ",
    description:
      "Filler, SMAS-X collagen lifting, and wrinkle reduction. Contour, volumize, and rejuvenate your facial profile.",
    icon: "✧",
    imageVariant: "alt2",
    href: "/services/facial-design",
  },
  {
    category: "Surgery",
    title: "Surgical Procedures",
    thTitle: "ศัลยกรรม",
    description:
      "Rhinoplasty, blepharoplasty, liposuction, chin augmentation, lip surgery, and facial fat transfer.",
    icon: "○",
    imageVariant: "alt3",
    href: "/services/surgery",
  },
  {
    category: "Treatment",
    title: "Skin Rejuvenation",
    thTitle: "ทรีทเมนท์ ฟื้นฟูผิว",
    description:
      "Meso Glass Skin, PRP, Collagen Biostimulator, Placenta GF, and Vitamin Drip for radiant, youthful skin.",
    icon: "◆",
    imageVariant: "alt4",
    href: "/services/skin-rejuvenation",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-bg-cream py-30 px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-18 text-center">
          <p className="mb-4 font-sans text-[10px] font-semibold tracking-[5px] uppercase text-primary">
            Our Services
          </p>
          <h2 className="mb-2 font-display text-[clamp(28px,4vw,44px)] font-normal tracking-luxury text-navy">
            Treatments & Procedures
          </h2>
          <p className="font-thai-serif text-[clamp(18px,2.5vw,24px)] font-light text-navy/50">
            บริการของเรา
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              variant={service.variant ?? "default"}
              badge={service.badge}
              href={service.href}
            >
              <ServiceCardImage
                imageVariant={service.imageVariant}
                icon={service.icon}
              />
              <ServiceCardBody>
                <ServiceCardCategory>{service.category}</ServiceCardCategory>
                <ServiceCardTitle thTitle={service.thTitle}>
                  {service.title}
                </ServiceCardTitle>
                <ServiceCardDescription>
                  {service.description}
                </ServiceCardDescription>
                <ServiceCardLink href={service.href} />
              </ServiceCardBody>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
