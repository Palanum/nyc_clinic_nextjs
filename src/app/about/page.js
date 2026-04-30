"use client";

import DoctorCard from "@/components/ui/DoctorCard";
import SectionHeader from "@/components/ui/SectionHeader";

function FeatureItem({ title, th, desc }) {
  return (
    <div className="flex gap-4">
      <div className="text-primary text-xl">✦</div>

      <div>
        <h3 className="font-display text-lg text-primary">
          {title}
        </h3>
        <p className="text-sm text-primary-light/90 mb-1">{th}</p>
        <p className="text-text-muted text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-bg-main text-text-main">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <SectionHeader
          title="About Our Clinic"

          variant="dark"
        />
        <div className="text-primary-light/70 leading-relaxed max-w-3xl mx-auto flex flex-col gap-4">
          <p className=" leading-relaxed ">
            NYC CLINIC ดำเนินธุรกิจด้านความงามและศัลยกรรม มากกว่า 15 ปี NYC CLINIC ให้คำแนะนำพร้อมให้คำปรึกษาอย่างตรงไปตรงมาและจริงใจ โดยแพทย์ผู้ชำนาญการด้านผิวพรรณ ด้านการปรับรูปหน้า และเวชศาสตร์ชะลอวัย และศัลยแพทย์ความงาม
          </p>
          <p className=" ">
            เพื่อให้คุณมีสุขภาพดีจากภายใน รวมทั้งผิวพรรณดี และรูปหน้ามีมิติได้สัดส่วน ด้วยความพิถีพิถันให้บริการทุกขั้นตอน ด้วยผลิตภัณฑ์ปรนนิบัติผิว เพื่อรักษา บำรุง ดูแลและคงความอ่อนเยาว์ เราพร้อมมอบคุณภาพการรักษา เพื่อผลลัพธ์ที่คุณพึงพอใจและสัมผัสได้
          </p>
          <p className=" leading-relaxed max-w-3xl mx-auto">
            สถานที่ตั้งคลินิกเดินทางสะดวก คลินิกสะอาดสวยงาม และมั่นใจได้ด้วยมาตรฐานความสะอาดปราศจากเชื้อมาตรฐานเดียวกับโรงพยาบาลชั้นนำ
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 bg-bg-cream">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader
            sectionname="Our Philosophy"
            title="Care Beyond Beauty"
            titleth="ดูแลมากกว่าความงาม"
            variant="light"
          />


        </div>
      </section>

      {/* DOCTOR HIGHLIGHT */}
      {/* <section className="py-24 px-6 bg-bg-soft">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            sectionname="Our Experts"
            title="Meet Our Doctors"
            titleth="ทีมแพทย์ของเรา"
            variant="dark"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DoctorCard
              mode="summary"
              image="/doctors/doc1.jpg"
              enName="Dr. John Smith"
              thName="นพ. จอห์น สมิธ"
              desc1="Dermatology Specialist"
              desc2="10+ years experience"
            />
            <DoctorCard
              mode="summary"
              image="/doctors/doc2.jpg"
              enName="Dr. Anna Lee"
              thName="พญ. แอนนา ลี"
              desc1="Laser Expert"
              desc2="Certified Specialist"
            />
          </div>
        </div>
      </section> */}

      {/* WHY US */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            sectionname="Why Choose Us"
            title="Our Commitment"
            titleth="เหตุผลที่ลูกค้าเลือกเรา"
            variant="dark"
          />

          <div className="grid sm:grid-cols-2 gap-8 mt-10">
            <FeatureItem
              title="Advanced Technology"
              th="เทคโนโลยีทันสมัย"
              desc="ใช้เครื่องมือที่ได้รับมาตรฐานระดับสากล"
            />
            <FeatureItem
              title="Expert Doctors"
              th="ทีมแพทย์ผู้เชี่ยวชาญ"
              desc="ดูแลโดยแพทย์เฉพาะทาง"
            />
            <FeatureItem
              title="Personalized Care"
              th="ดูแลเฉพาะบุคคล"
              desc="วิเคราะห์และออกแบบการรักษาเฉพาะคุณ"
            />
            <FeatureItem
              title="Safe & Trusted"
              th="ปลอดภัย น่าเชื่อถือ"
              desc="ได้รับความไว้วางใจจากลูกค้าจำนวนมาก"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy-deep text-center">
        <h2 className="text-white text-2xl font-display mb-4">
          Start Your Skin Journey Today
        </h2>
        <p className="text-white/60 mb-6">
          เริ่มต้นดูแลผิวของคุณกับเรา
        </p>
        <button className="px-6 py-3 bg-primary text-white rounded-full text-sm tracking-wide">
          Book Appointment
        </button>
      </section>

    </main>
  );
}