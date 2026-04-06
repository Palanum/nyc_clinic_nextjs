import React from "react";
import SectionHeader from "../ui/SectionHeader";

function ReviewSection() {
  return (
    <section className="py-32 px-6 bg-cream">
      <SectionHeader title="Client Reviews / รีวิวลูกค้า" subtitle="Reviews" />

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="glass-card p-6">
          <p>"Amazing experience, very professional."</p>
          <p className="text-sm text-gray-400 mt-2">ประทับใจมาก บริการดีมาก</p>
        </div>

        <div className="glass-card p-6">
          <p>"Highly recommended clinic."</p>
          <p className="text-sm text-gray-400 mt-2">แนะนำเลย คลินิกดีมาก</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
