import { NavLink, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/order", label: "Cart" },
  { to: "/contact", label: "Contact" },
];

const NavBar = () => {
  const { cart } = useCart();
  const count = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <header className="border-b border-border bg-background sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          <span className="text-brand">QuickBite</span> Chicken
        </Link>

        <nav className="flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "bg-brand-muted text-brand"
                    : "text-foreground/70 hover:text-foreground hover:bg-surface"
                }`
              }
            >
              {item.label === "Cart" && <ShoppingCart className="w-4 h-4" />}
              {item.label}
              {item.label === "Cart" && count > 0 && (
                <span className="ml-1 inline-flex items-center justify-center text-xs font-semibold bg-brand text-brand-foreground rounded-full min-w-5 h-5 px-1.5">
                  {count}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
