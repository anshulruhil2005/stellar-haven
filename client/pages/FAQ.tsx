import Layout from "../components/Layout";

export default function FAQ() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h1>
          <p className="text-muted-foreground mb-8">
            Common questions our customers ask about orders, delivery and support.
          </p>

          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <div>
              <h2 className="font-semibold text-foreground mb-1">
                1. Are all products original?
              </h2>
              <p>
                Yes, we only sell 100% genuine and brand-authorized electronics with
                proper invoice and warranty where applicable.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-1">
                2. How long does delivery take?
              </h2>
              <p>
                Standard delivery usually takes 3–7 working days depending on your
                pincode. Metro cities are typically faster.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-1">
                3. Do you provide installation / demo?
              </h2>
              <p>
                For large appliances and TVs, brand engineers usually visit after
                delivery. We share all details on your invoice and SMS.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-1">
                4. How can I track my order?
              </h2>
              <p>
                Once your order is shipped, tracking details are shared on WhatsApp,
                SMS and email. You can also check the status in your account.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-1">
                5. How do I contact support?
              </h2>
              <p>
                You can reach us via the contact page, WhatsApp, or directly at the
                email and phone number mentioned in the footer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
