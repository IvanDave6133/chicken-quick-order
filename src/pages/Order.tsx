import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const Order = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    setPlaced(true);
    toast.success("Order placed successfully!");
    clearCart();
  };

  const handleRemove = (id: number, name: string) => {
    removeFromCart(id);
    toast(`${name} removed from cart`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavBar />

      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Your Cart</h1>

          {placed ? (
            <div className="mt-8 p-6 rounded-2xl border border-border bg-brand-muted/40 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Order placed successfully!</p>
                <p className="text-sm text-foreground/70 mt-1">
                  Thanks for your order. We'll have it ready shortly.
                </p>
                <Link
                  to="/menu"
                  className="inline-block mt-4 text-sm font-medium text-brand hover:underline"
                >
                  Order more →
                </Link>
              </div>
            </div>
          ) : cart.length === 0 ? (
            <div className="mt-8 p-10 rounded-2xl border border-dashed border-border text-center">
              <p className="text-foreground/70">Your cart is empty.</p>
              <Link
                to="/menu"
                className="inline-block mt-4 px-5 py-2.5 rounded-full bg-brand text-brand-foreground font-semibold hover:bg-brand/90"
              >
                Browse menu
              </Link>
            </div>
          ) : (
            <>
              <div className="mt-8 rounded-2xl border border-border bg-background divide-y divide-border">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-5">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-foreground/60 mt-0.5">Qty {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => handleRemove(item.id, item.name)}
                        className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-brand transition-colors px-2 py-1"
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between p-5 rounded-2xl bg-surface border border-border">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-brand">${total.toFixed(2)}</span>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handlePlaceOrder}
                  className="px-6 py-3 rounded-full bg-brand text-brand-foreground font-semibold shadow-sm hover:bg-brand/90 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
