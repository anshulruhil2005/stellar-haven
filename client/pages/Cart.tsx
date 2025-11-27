// client/pages/Cart.tsx

import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { getProductById } from "../lib/products";
import {
  Trash2,
  Plus,
  Minus,
  CreditCard,
  Wallet,
  Smartphone,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";

type PaymentMethod = "upi" | "card" | "cod";

interface Address {
  fullName: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
}

export default function Cart() {
  const {
    items,
    clearCart,
    removeFromCart,
    addToCart,
    decreaseQuantity,
  } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("upi");

  const [address, setAddress] = useState<Address>({
    fullName: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Merge cart items + product details
  const cartProducts = useMemo(() => {
    return items
      .map((item) => {
        const product = getProductById(item.id);
        if (!product) return null;
        return {
          ...product,
          quantity: item.quantity,
          subtotal: product.price * item.quantity,
        };
      })
      .filter(Boolean) as any[];
  }, [items]);

  const totals = useMemo(() => {
    const subtotal = cartProducts.reduce(
      (sum: number, p: any) => sum + p.subtotal,
      0
    );
    const shipping = subtotal > 0 ? 199 : 0; // flat shipping
    const tax = Math.round(subtotal * 0.18); // 18% GST
    const grandTotal = subtotal + shipping + tax;
    return { subtotal, shipping, tax, grandTotal };
  }, [cartProducts]);

  const isEmpty = cartProducts.length === 0;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmpty) return;

    // basic validation
    if (
      !address.fullName.trim() ||
      !address.phone.trim() ||
      !address.line1.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.pincode.trim()
    ) {
      alert("Please fill all required delivery address fields.");
      return;
    }

    if (address.phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (address.pincode.replace(/\D/g, "").length < 6) {
      alert("Please enter a valid 6-digit pincode.");
      return;
    }

    alert(
      `Order placed successfully!\n\nName: ${address.fullName}\nPhone: ${
        address.phone
      }\nAddress: ${address.line1}, ${address.line2 || ""}, ${
        address.city
      }, ${address.state} - ${
        address.pincode
      }\n\nPayment: ${paymentMethod.toUpperCase()}\nTotal: ₹${totals.grandTotal.toLocaleString()}`
    );

    clearCart();
  };

  const updateAddress = (field: keyof Address, value: string) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Shopping Cart & Checkout
          </h1>
          <p className="text-muted-foreground mb-8">
            Add your delivery address, review items, choose payment method
            and place your order.
          </p>

          {isEmpty ? (
            <div className="bg-card border border-dashed border-border rounded-2xl p-10 text-center">
              <p className="text-lg font-semibold mb-2">
                Your cart is empty
              </p>
              <p className="text-muted-foreground mb-4">
                Add some products to your cart from the Products page to see
                them here.
              </p>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Browse Products
              </a>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.6fr,1fr]">
              {/* LEFT: Cart items */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">Your Items</h2>
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:text-red-600 font-medium"
                  >
                    Clear cart
                  </button>
                </div>

                <div className="bg-card border border-border rounded-2xl divide-y divide-border">
                  {cartProducts.map((product: any) => (
                    <div
                      key={product.id}
                      className="flex gap-4 p-4 md:p-5 items-center"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-xl bg-tech-gray/40 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 space-y-1">
                        <p className="text-xs uppercase tracking-wide text-primary/80 font-semibold">
                          {product.category}
                        </p>
                        <h3 className="text-sm md:text-base font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          ₹{product.price.toLocaleString()} per unit
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Rating: {product.rating.toFixed(1)} ★ (
                          {product.reviews} reviews)
                        </p>
                      </div>

                      {/* Quantity + price + remove */}
                      <div className="flex flex-col items-end gap-2">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 bg-background border border-border rounded-full px-2 py-1">
                          <button
                            onClick={() =>
                              decreaseQuantity(product.id)
                            }
                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted"
                            aria-label="Decrease"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-5 text-center">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(product.id)}
                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-muted"
                            aria-label="Increase"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Subtotal */}
                        <p className="text-sm font-semibold">
                          ₹{product.subtotal.toLocaleString()}
                        </p>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-xs text-red-500 hover:text-red-600 inline-flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Address + Summary + Payment */}
              <aside className="space-y-4">
                {/* Delivery Address */}
                <div className="bg-card border border-border rounded-2xl p-4 md:p-5 space-y-3">
                  <h2 className="text-lg font-semibold">
                    Delivery Address
                  </h2>
                  <p className="text-xs text-muted-foreground mb-1">
                    Please fill where you want us to deliver your order.
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          value={address.fullName}
                          onChange={(e) =>
                            updateAddress("fullName", e.target.value)
                          }
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          value={address.phone}
                          onChange={(e) =>
                            updateAddress("phone", e.target.value)
                          }
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={address.line1}
                        onChange={(e) =>
                          updateAddress("line1", e.target.value)
                        }
                        placeholder="House no., street, area"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium mb-1">
                        Address Line 2 (optional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        value={address.line2}
                        onChange={(e) =>
                          updateAddress("line2", e.target.value)
                        }
                        placeholder="Landmark, nearby place"
                      />
                    </div>

                    <div className="grid gap-3 md:grid-cols-3">
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          value={address.city}
                          onChange={(e) =>
                            updateAddress("city", e.target.value)
                          }
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          value={address.state}
                          onChange={(e) =>
                            updateAddress("state", e.target.value)
                          }
                          placeholder="State"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium mb-1">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          value={address.pincode}
                          onChange={(e) =>
                            updateAddress("pincode", e.target.value)
                          }
                          placeholder="6-digit pincode"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order summary */}
                <div className="bg-card border border-border rounded-2xl p-4 md:p-5 space-y-3">
                  <h2 className="text-lg font-semibold">Order Summary</h2>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totals.subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {totals.shipping > 0
                        ? `₹${totals.shipping.toLocaleString()}`
                        : "Free"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span>₹{totals.tax.toLocaleString()}</span>
                  </div>

                  <div className="border-t border-border pt-3 mt-1 flex items-center justify-between">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-xl font-bold text-primary">
                      ₹{totals.grandTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Payment methods + place order */}
                <form
                  onSubmit={handlePlaceOrder}
                  className="bg-card border border-border rounded-2xl p-4 md:p-5 space-y-4"
                >
                  <h2 className="text-lg font-semibold">Payment Method</h2>

                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary/60 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={() => setPaymentMethod("upi")}
                      />
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">UPI / QR</p>
                          <p className="text-xs text-muted-foreground">
                            Pay using Google Pay, PhonePe, Paytm, etc.
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary/60 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                      />
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Credit / Debit Card</p>
                          <p className="text-xs text-muted-foreground">
                            Visa, MasterCard, RuPay supported.
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:border-primary/60 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                      />
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Cash on Delivery</p>
                          <p className="text-xs text-muted-foreground">
                            Pay in cash when the product is delivered.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isEmpty}
                    className="w-full inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    Place Order
                  </button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    This is a demo checkout. Payment gateway integration can
                    be connected later (Razorpay / PhonePe / Stripe, etc.).
                  </p>
                </form>
              </aside>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
