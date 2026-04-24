import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand tracking-tight">
          QuickBite<span className="text-foreground"> Chicken</span>
        </Link>
        {/* Subtle issues: items too close together, slightly muted color, no active page indicator,
            cart count missing so users can't tell if items were added */}
        <nav className="flex items-center gap-2 text-[13px] text-foreground/60">
          <Link to="/" className="px-1 hover:text-foreground">Home</Link>
          <Link to="/menu" className="px-1 hover:text-foreground">Menu</Link>
          <Link to="/order" className="px-1 hover:text-foreground">Cart</Link>
          <Link to="/contact" className="px-1 hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
