export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-cream">
      <h2 className="text-center font-heading text-4xl mb-12">
        Reviews / รีวิว
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="glass-card p-6">
          <p>"Amazing service and very professional!"</p>
          <p className="text-sm text-gray-400 mt-2">
            บริการดีมาก ประทับใจสุดๆ
          </p>
        </div>

        <div className="glass-card p-6">
          <p>"Highly recommended clinic."</p>
          <p className="text-sm text-gray-400 mt-2">
            แนะนำเลย คลินิกดีมาก
          </p>
        </div>

      </div>
    </section>
  );
}