import Layout from "../components/Layout";

export default function ShippingInfo() {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shipping Info</h1>
          <p className="text-muted-foreground mb-8">
            Details about delivery coverage, timelines and charges.
          </p>

          <div className="space-y-6 text-sm md:text-base text-muted-foreground">
            <div>
              <h2 className="font-semibold text-foreground mb-2">
                1. Delivery areas
              </h2>
              <p>
                We currently deliver to major cities and towns across India. Remote
                locations may have limited service or longer delivery times.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                2. Delivery time
              </h2>
              <p>
                Orders are usually dispatched within 24–48 hours. Total delivery time
                is typically 3–7 working days based on your location.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-foreground mb-2">
                3. Shipping charges
              </h2>
              <p>
                Standard shipping is either free or charged as per offer running on
                the website. Exact charges (if any) are shown at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
