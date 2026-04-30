import React from "react";
import ButtonUi from "../ui/ButtonUi";

function ContactSection() {
  return (
    <section className="py-32 px-6 bg-navy-deep text-center">
      <h2 className="font-heading text-4xl text-primary">
        Book Your Consultation
      </h2>

      <p className="text-primary-light mt-4">Start your beauty journey today</p>

      <p className="text-primary-light font-thai-display mt-2">
        เริ่มต้นการดูแลตัวเองวันนี้
      </p>

      <div className="mt-10">
        <ButtonUi variant="pill" >Contact Us / ติดต่อเรา</ButtonUi>
      </div>
    </section>
  );
}

export default ContactSection;
