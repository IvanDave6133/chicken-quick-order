import { useState } from "react";
import NavBar from "@/components/NavBar";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />

      <section className="max-w-xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight">Contact us</h1>
        <p className="mt-2 text-foreground/70">We'd love to hear from you.</p>

        {/* Subtle issue: labels have slightly inconsistent spacing/alignment */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Subtle issue: no validation, no success/error feedback
          }}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-1.5 ml-0.5">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-border"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-md bg-brand text-brand-foreground font-medium hover:bg-brand/90"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
