import NavBar from "@/components/NavBar";
import { useCart } from "@/context/CartContext";

const Order = () => {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="mt-6 text-foreground/70">Your cart is empty.</p>
        ) : (
          <div className="mt-8 rounded-xl border border-border bg-surface divide-y divide-border">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-foreground/60">Qty {item.quantity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  {/* Subtle issue: remove control is tiny, ambiguous symbol, no label */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="remove"
                    className="text-foreground/40 hover:text-foreground/70 text-sm w-5 h-5 leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between p-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-6 flex justify-end">
            {/* Subtle issue: clicking provides no confirmation/feedback */}
            <button
              onClick={() => {
                /* no feedback intentionally */
              }}
              className="px-5 py-2.5 rounded-md bg-brand text-brand-foreground font-medium hover:bg-brand/90"
            >
              Place Order
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Order;
