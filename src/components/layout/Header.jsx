import Navbar from "./Navbar";
import TopBar from "./Topbar";

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      {/* <TopBar /> */}
      <Navbar />
    </header>
  );
}
