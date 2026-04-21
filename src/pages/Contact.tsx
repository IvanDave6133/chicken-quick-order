import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { Send, CheckCircle2 } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Please fix the errors below.");
      return;
    }
    setSent(true);
    toast.success("Message sent successfully!");
    setName("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavBar />

      <main className="flex-1">
        <section className="max-w-xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-foreground/70">We'd love to hear from you.</p>

          {sent && (
            <div className="mt-6 p-4 rounded-xl border border-border bg-brand-muted/40 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 shrink-0" />
              <p className="text-sm font-medium text-foreground">
                Thanks! Your message has been sent.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                }}
                className={`w-full px-3.5 py-2.5 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 ${
                  errors.name ? "border-brand" : "border-border"
                }`}
              />
              {errors.name && <p className="mt-1.5 text-sm text-brand">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                }}
                className={`w-full px-3.5 py-2.5 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand/30 ${
                  errors.message ? "border-brand" : "border-border"
                }`}
              />
              {errors.message && <p className="mt-1.5 text-sm text-brand">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand text-brand-foreground font-semibold shadow-sm hover:bg-brand/90 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
