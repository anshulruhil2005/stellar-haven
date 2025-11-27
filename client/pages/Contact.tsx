// client/pages/Contact.tsx

import Layout from "../components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr]">
          {/* Left: Contact form */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Contact Us
            </h1>
            <p className="text-muted-foreground mb-8">
              Have a question about orders, products or bulk purchase? Send us a
              message and our team will get back to you shortly.
            </p>

            <form className="space-y-4 bg-card border border-border rounded-2xl p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us what you need help with..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact details */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-4 md:p-6">
              <h2 className="text-lg font-semibold mb-4">
                Ruhil Electronics – Support
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p>+91 90000 00000</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p>support@ruhilelectronics.in</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p>
                      Ruhil Electronics, Rohtak, Haryana
                      <br />
                      India – 124001
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Working hours</p>
                    <p>Mon – Sat, 10:00 AM to 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
