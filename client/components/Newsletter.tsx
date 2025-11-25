import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="bg-gradient-to-r from-primary to-tech-blue-dark py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Latest Deals
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Subscribe to our newsletter and get exclusive offers and updates directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-lg bg-white text-tech-black font-medium focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-tech-black font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-white animate-slide-up">
              Thanks for subscribing! Check your email for special offers.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
