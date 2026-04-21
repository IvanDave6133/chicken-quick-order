import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/70">
          © {new Date().getFullYear()} QuickBite Chicken. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm">
          <Link to="/contact" className="text-foreground/70 hover:text-foreground">
            Contact
          </Link>
          <div className="flex items-center gap-3 text-foreground/60">
            <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
