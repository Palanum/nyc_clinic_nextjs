import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "NYC Clinic | Premium Aesthetic Clinic",
  description: "ความงามที่ถูกนิยามใหม่ — Premium Aesthetic Clinic in Bangkok",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-bg-main text-text-main font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
