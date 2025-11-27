import Layout from "../components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            How we collect, use and protect your personal information at Ruhil
            Electronics.
          </p>

          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <div>
              <h2 className="font-semibold text-foreground mb-2">
                1. Information we collect
              </h2>
              <p>
                We collect basic contact information (name, phone, email, address),
                order details, and limited technical data such as IP address and
                browser information for security and analytics.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                2. How we use your data
              </h2>
              <p>
                Your data is used to process orders, send updates, provide customer
                support, and improve our services. We do not sell your data to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                3. Cookies & tracking
              </h2>
              <p>
                We may use cookies to remember your preferences and improve your
                browsing experience. You can clear or block cookies from your browser
                settings at any time.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                4. Data security
              </h2>
              <p>
                We use industry-standard security practices and only allow authorized
                staff to access customer information when required for service.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                5. Your rights
              </h2>
              <p>
                You can request correction or deletion of your personal data by
                contacting our support team with a valid identity proof if required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
