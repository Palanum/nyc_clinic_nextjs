"use client";

import ComparisonCard from "../ui/ComparisonCard";
import SectionHeader from "../ui/SectionHeader";

const results = [
  {
    id: 1,
    mode: "split",
    beforeSrc: "/images/before1.jpg",
    afterSrc: "/images/after1.jpg",
    title: "Acne Treatment",
  },
  {
    id: 2,
    mode: "split",
    beforeSrc: "/images/before2.jpg",
    afterSrc: "/images/after2.jpg",
    title: "Skin Brightening",
  },
  {
    id: 3,
    mode: "split",
    beforeSrc: "/images/before3.jpg",
    afterSrc: "/images/after3.jpg",
    title: "Dark Spot Removal",
  },
  {
    id: 4,
    mode: "single",
    image: "/images/combine1.jpg",
    title: "Laser Treatment",
  },
  {
    id: 5,
    mode: "single",
    image: "/images/combine2.jpg",
    title: "Anti-Aging",
  },
  {
    id: 6,
    mode: "single",
    image: "/images/combine3.jpg",
    title: "Scar Reduction",
  },
];



function ResultSection() {
  return (
    <section className="py-16 bg-bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader
          sectionname={"real Resault"}
          title={"Before & After"}
          titleth={"ผลลัพธ์จริง ก่อน & หลัง"}
        />



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((item) => (
            <ComparisonCard
              key={item.id}
              mode={item.mode}
              beforeSrc={item.beforeSrc}
              afterSrc={item.afterSrc}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ResultSection;