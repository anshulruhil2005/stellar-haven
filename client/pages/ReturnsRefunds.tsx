import Layout from "../components/Layout";

export default function ReturnsRefunds() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Returns &amp; Refunds
          </h1>
          <p className="text-muted-foreground mb-8">
            Understand when and how you can request a return or refund.
          </p>

          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <div>
              <h2 className="font-semibold text-foreground mb-2">
                1. Return window
              </h2>
              <p>
                Most products can be returned within 7 days of delivery if they are
                unused, in original packaging, and with all accessories.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                2. Eligible issues
              </h2>
              <p>
                Returns are accepted for damaged items on delivery, wrong product
                received, or major functional defects confirmed by our support team.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                3. Refund mode
              </h2>
              <p>
                Approved refunds are processed back to the original payment method
                within 5–7 working days after quality check.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
