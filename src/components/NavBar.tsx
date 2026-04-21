import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand tracking-tight">
          QuickBite<span className="text-foreground"> Chicken</span>
        </Link>
        {/* Subtle issue: items too close together, no active page indicator */}
        <nav className="flex items-center gap-3 text-sm text-foreground/80">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <Link to="/menu" className="hover:text-foreground">Menu</Link>
          <Link to="/order" className="hover:text-foreground">Cart</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
