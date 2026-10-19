import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center">

        {/* Back to Top - Left */}
        <a
          href="#home"
          className="absolute right-0 group inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
        >
          Back to top

          <ArrowUp
            size={15}
            className="transition-transform group-hover:-translate-y-1"
          />
        </a>

        {/* Copyright - Center */}
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Alishan Siddique. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;