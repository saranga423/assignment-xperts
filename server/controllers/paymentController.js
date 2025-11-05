// Controller for managing user payments and transactions
// server/controllers/paymentController.js
import asyncHandler from "express-async-handler";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const createCheckoutSession = asyncHandler(async (req, res) => {
  const { price, currency = "usd", successUrl, cancelUrl } = req.body;
  if (!price || !successUrl || !cancelUrl) {
    res.status(400); throw new Error("Missing required parameters");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price_data: { currency, product_data: { name: "Service payment" }, unit_amount: Math.round(price * 100) }, quantity: 1 }],
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  res.json({ url: session.url });
});
