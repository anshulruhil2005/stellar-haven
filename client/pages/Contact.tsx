import { useState } from "react";
import Layout from "../components/Layout";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Enquiry from Ruhil Electronics Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number
    const whatsappNumber = "919896970234";

    // Create WhatsApp link and open it
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Show success message
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-tech-blue-dark py-16 md:py-24">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            We're here to help and answer any question you might have
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:support@ruhil.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@ruhil.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+919000000000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9000 000 000
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Monday - Friday, 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/919000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9000 000 000
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Quick responses and instant support
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      Ruhil Electronics<br />
                      123 Tech Park, Bangalore<br />
                      Karnataka 560034, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-card rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
                    ✓ Thank you! Your enquiry has been sent to our WhatsApp. We'll respond as soon as possible!
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="+91 9000 000 000"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Status</option>
                      <option value="return">Returns & Refunds</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-tech-blue-dark text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Find Us On The Map
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2299098295513!2d77.62472657520725!3d12.972599187344116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11bb33b0b5c9%3A0x123456789abcdef0!2sTech%20Park%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "What is your return policy?",
                  answer: "We offer a 30-day hassle-free return policy. If you're not satisfied with your purchase, you can return it within 30 days of purchase for a full refund.",
                },
                {
                  question: "How long does delivery take?",
                  answer: "Delivery typically takes 2-5 business days within India, depending on your location. Express delivery options are also available.",
                },
                {
                  question: "Are all products genuine?",
                  answer: "Yes, all products sold at Ruhil Electronics are 100% authentic and come with official manufacturer warranty.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, digital wallets, and Cash on Delivery (COD).",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white dark:bg-card rounded-lg shadow-md p-6 cursor-pointer group"
                >
                  <summary className="font-bold text-foreground text-lg flex justify-between items-center">
                    {faq.question}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
