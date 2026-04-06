export default function TopBar() {
  return (
    <div className="bg-bg-main text-text-muted text-xs py-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="flex gap-4">
          <span>📍 Bangkok, Thailand</span>
          <span>📞 02-xxx-xxxx</span>
        </div>

        <div className="hidden md:flex gap-4">
          <a href="#" className="hover:text-primary transition-colors">
            Facebook
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Line
          </a>
        </div>
      </div>
    </div>
  );
}
