import { useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import friedChicken from "@/assets/fried-chicken.jpg";
import spicyChicken from "@/assets/spicy-chicken.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenCombo from "@/assets/chicken-combo.jpg";

type Category = "Meals" | "Wings" | "Combos";

const menuItems: {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: Category;
}[] = [
  { id: 1, name: "Fried Chicken", price: 8.99, image: friedChicken, description: "Classic hand-battered fried chicken.", category: "Meals" },
  { id: 2, name: "Spicy Chicken", price: 9.99, image: spicyChicken, description: "Coated in our signature chili blend.", category: "Meals" },
  { id: 3, name: "Chicken Wings", price: 7.49, image: chickenWings, description: "Crispy wings with your choice of sauce.", category: "Wings" },
  { id: 4, name: "Chicken Meal Combo", price: 14.99, image: chickenCombo, description: "Chicken, fries, slaw, and a drink.", category: "Combos" },
];

const filters: ("All" | Category)[] = ["All", "Meals", "Wings", "Combos"];

const Menu = () => {
  const { addToCart } = useCart();
  const [active, setActive] = useState<"All" | Category>("All");

  const visible = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  const handleAdd = (item: { id: number; name: string; price: number }) => {
    addToCart(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavBar />

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Chicken Menu</h1>
          <p className="mt-2 text-foreground/70">Fresh, crispy, and made to order.</p>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === f
                    ? "bg-brand text-brand-foreground border-brand"
                    : "bg-background text-foreground/70 border-border hover:border-brand hover:text-brand"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-background overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="mt-1 text-sm text-foreground/70 flex-1">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => handleAdd({ id: item.id, name: item.name, price: item.price })}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand text-brand-foreground text-sm font-semibold hover:bg-brand/90 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
