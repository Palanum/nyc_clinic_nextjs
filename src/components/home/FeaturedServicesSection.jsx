import React from "react";
import SpotlightSection from "../ui/FullServiceCard";
const slides = [
  {
    tag: "Signature Treatment",
    title: "Nose Thread Lift",
    thTitle: "ร้อยไหมเสริมจมูก เทคนิคกึ่งศัลยกรรม",
    desc: "Our signature semi-surgical nose thread lift technique delivers natural-looking elevation and definition without the downtime of traditional rhinoplasty. Precision-placed threads stimulate collagen production for results that improve over time.",
    img: "/images/spot1.jpg",
    // note: "* Results may vary per individual",
    list: [
      {
        title: "30 Minutes",
        desc: "Quick procedure, minimal downtime",
      },
      {
        title: "Natural Results",
        desc: "Subtle, elegant nose elevation",
      },
      {
        title: "Collagen Boost ",
        desc: "Results improve over 2-3 months",
      },
      {
        title: "No Surgery ",
        desc: "ไม่ต้องผ่าตัด ไม่มีแผล ฟื้นตัวไว",
      },
    ]
  },
]
function FeaturedServicesSection() {
  return <section className=" text-primary">
    <SpotlightSection variant="hero" slides={slides} />
  </section>;
}

export default FeaturedServicesSection;
