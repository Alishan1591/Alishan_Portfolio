import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          AS.<span className="text-gray-500">.</span>
        </a>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}

        <button
          type="button"
          className="text-gray-300 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;