import NavBar from "@/components/NavBar";
import { useCart } from "@/context/CartContext";
import friedChicken from "@/assets/fried-chicken.jpg";
import spicyChicken from "@/assets/spicy-chicken.jpg";
import chickenWings from "@/assets/chicken-wings.jpg";
import chickenCombo from "@/assets/chicken-combo.jpg";

const menuItems = [
  { id: 1, name: "Fried Chicken", price: 8.99, image: friedChicken, description: "Classic hand-battered fried chicken." },
  { id: 2, name: "Spicy Chicken", price: 9.99, image: spicyChicken, description: "Coated in our signature chili blend." },
  { id: 3, name: "Chicken Wings", price: 7.49, image: chickenWings, description: "Crispy wings with your choice of sauce." },
  { id: 4, name: "Chicken Meal Combo", price: 14.99, image: chickenCombo, description: "Chicken, fries, slaw, and a drink." },
];

const Menu = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
        <p className="mt-2 text-foreground/70">Pick your favorites and add them to your cart.</p>

        {/* Subtle issue: no category grouping, just a flat grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-border bg-surface overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="text-sm text-foreground/70 flex-1">{item.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-medium text-foreground">${item.price.toFixed(2)}</span>
                  {/* Subtle issue: button is a bit small + low contrast against the surface card */}
                  <button
                    onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                    className="text-xs px-2.5 py-1 rounded-md border border-border bg-background text-foreground/70"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
