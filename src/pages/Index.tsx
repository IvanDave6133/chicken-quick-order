import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import friedChicken from "@/assets/fried-chicken.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Crispy chicken,<br />delivered fast.
          </h1>
          <p className="mt-4 text-foreground/70 text-lg max-w-md">
            Hand-battered, freshly fried, and ready in minutes. Order from the QuickBite menu and skip the line.
          </p>
          {/* Subtle issue: CTA is low-emphasis (looks like a secondary link/button) */}
          <Link
            to="/menu"
            className="inline-block mt-6 px-4 py-2 text-sm border border-border rounded-md text-foreground/80 hover:bg-surface"
          >
            Order Now
          </Link>
        </div>
        <div>
          <img
            src={friedChicken}
            alt="QuickBite signature fried chicken"
            className="rounded-xl w-full object-cover aspect-[4/3] shadow-sm"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        {[
          { title: "Fresh daily", body: "Locally sourced ingredients prepared each morning." },
          { title: "Fast delivery", body: "Average delivery time under 30 minutes." },
          { title: "Loved by many", body: "Rated 4.8 by thousands of happy customers." },
        ].map((f) => (
          <div key={f.title} className="p-6 rounded-xl border border-border bg-surface">
            <h3 className="font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{f.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Index;
