import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground mb-8">
            Please read these terms carefully before using our website and services.
          </p>

          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <div>
              <h2 className="font-semibold text-foreground mb-2">1. Use of site</h2>
              <p>
                By accessing this site, you agree not to misuse the platform, attempt
                fraud, or interfere with other customers&apos; experience.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                2. Pricing & availability
              </h2>
              <p>
                Prices, offers and stock availability may change without prior notice.
                Orders are confirmed only after successful payment and verification.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                3. Order cancellation
              </h2>
              <p>
                We reserve the right to cancel any order in case of incorrect pricing,
                stock issues, or suspected misuse. Any payment received will be
                refunded as per our refund policy.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                4. Warranty & service
              </h2>
              <p>
                Warranty is provided directly by the brand/manufacturer wherever
                applicable. Service terms are as per brand policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
