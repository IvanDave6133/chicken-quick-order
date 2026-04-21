import { Link } from "react-router-dom";
import { Truck, Leaf, Tag, ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import friedChicken from "@/assets/fried-chicken.jpg";

const features = [
  { icon: Truck, title: "Fast Delivery", body: "Hot food at your door in under 30 minutes." },
  { icon: Leaf, title: "Fresh Ingredients", body: "Locally sourced and prepared daily." },
  { icon: Tag, title: "Affordable Meals", body: "Generous portions at honest prices." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Delicious Chicken,<br />
              <span className="text-brand">Delivered Fast.</span>
            </h1>
            <p className="mt-5 text-lg text-foreground/70 max-w-md">
              Hand-battered, freshly fried, and ready in minutes. Order from QuickBite and skip the line.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-brand text-brand-foreground font-semibold shadow-sm hover:bg-brand/90 transition-colors"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div>
            <img
              src={friedChicken}
              alt="QuickBite signature fried chicken"
              className="rounded-2xl w-full object-cover aspect-[4/3] shadow-lg"
            />
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-border bg-surface hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-muted text-brand flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/70">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
