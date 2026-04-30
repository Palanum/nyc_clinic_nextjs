import React from "react";
import SectionHeader from "../ui/SectionHeader";
import ReviewCard from "../ui/reviewCard";


const reviews = [
  {
    id: 1,
    text: "ประทับใจมาก บริการดีมาก คุณหมอใจดีมาก",
    name: "คุณสมชาย",
    servicename: "Nose Thread Lift"
  },
  {
    id: 2,
    text: "แนะนำเลย คลินิกสะอาด บริการดีมาก",
    name: "คุณแอน",
    servicename: "Facial Thread Lift"
  },
  {
    id: 3,
    text: "คุณหมออธิบายละเอียด เข้าใจง่ายมาก",
    name: "คุณบี",
    servicename: "Skin Rejuvenation"
  },
];
function ReviewSection() {
  return (
    <section className="py-32 px-6 bg-navy">
      <SectionHeader
        sectionname={"Patient Stories"}
        title={"Client Reviews"}
        titleth={"เสียงจากลูกค้าของเรา"}
        variant="dark"
      />

      <div className="
    max-w-6xl mx-auto
    grid gap-8
    sm:grid-cols-2
    lg:grid-cols-3
  ">
        {reviews.map((item) => (
          <ReviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;
