import React from "react";

function ContactSection() {
  return (
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
  );
}

export default ContactSection;
