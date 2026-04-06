export default function Contact() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-center font-heading text-4xl mb-12">
        Contact Us / ติดต่อเรา
      </h2>

      <form className="max-w-xl mx-auto space-y-4">

        <input
          type="text"
          placeholder="Name / ชื่อ"
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          placeholder="Message / ข้อความ"
          className="w-full p-3 border rounded-lg"
          rows="4"
        />

        <button className="btn-primary w-full">
          Send Message / ส่งข้อความ
        </button>
      </form>
    </section>
  );
}