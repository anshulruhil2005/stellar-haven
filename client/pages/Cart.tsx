import Layout from "../components/Layout";
import { ArrowRight } from "lucide-react";

export default function Cart() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shopping Cart & Checkout
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            This page will feature a simple checkout flow with UPI, Cards, Wallets, and COD payment support, order summary with taxes and shipping calculations.
          </p>
          <p className="text-lg text-muted-foreground">
            💡 Continue prompting to build this page with checkout functionality!
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 text-primary font-semibold">
              <ArrowRight className="w-5 h-5" />
              Ask to add payment methods
            </div>
            <div className="inline-flex items-center gap-2 text-primary font-semibold">
              <ArrowRight className="w-5 h-5" />
              Ask to add order summary
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
