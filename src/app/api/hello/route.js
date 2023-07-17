import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe");

export async function GET() {
  return new Response("Hello Next.Js");
}

export async function POST(request) {
  const req = await request.json();

  const amount = parseFloat(req?.amount);
  const currency = req?.currency?.toString();

  const stripeClient = new stripe(
    "sk_test_51NJFpHInl9moESPEs7lXvRq4dddDGWv5gUPDGshS44oweJ9xXEyzQWPbkgdZWNlez60y5rR0a0UcXqFMZOBxcwd0002QTw7j67"
  );
  const intent = await stripeClient.paymentIntents.create({
    amount: amount * 10,
    currency: currency,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({
    success: true,
    intent: intent,
    clientSecret: intent.client_secret,
  });
}
