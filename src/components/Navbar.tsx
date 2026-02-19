import { Search, User } from "lucide-react";
import { useState } from "react";

const navLinks = ["Furniture", "Outdoor", "Office", "Lighting", "Rugs", "Decor", "About"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-nav">
      <div className="container flex items-center justify-between h-16 px-6">
        <a href="/" className="font-display text-2xl font-light tracking-wide text-nav-foreground">
          ebarza
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-nav-foreground/80 hover:text-nav-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-nav-foreground/80 hover:text-nav-foreground transition-colors">
            <User className="w-5 h-5" />
          </button>
          <a
            href="#"
            className="hidden sm:inline-flex border border-nav-foreground/50 text-nav-foreground text-sm px-5 py-1.5 rounded-sm hover:bg-nav-foreground/10 transition-colors"
          >
            Notify Me
          </a>
          <button
            className="md:hidden text-nav-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav border-t border-nav-foreground/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block text-sm text-nav-foreground/80 hover:text-nav-foreground">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
