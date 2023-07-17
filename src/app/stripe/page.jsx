"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Checkout from "../../components/Checkout/checkout";

import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [StripeData, setStripeData] = useState(null);

  const stripePromise = loadStripe(
    "pk_test_51NJFpHInl9moESPELb7oFSVLwaEoSBAKMKRcbT9HAvbYiwtx1Tp4wjdCE2f2KTh0OPeuPImOmfUWuIpnniiiaer0005PAU6vze"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.currentTarget.amount.value != "") {
      try {
        const response = await fetch("http://localhost:3000/api/hello", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: e.currentTarget.amount.value,
            currency: "usd",
          }), // Replace with your request body
        });

        if (response.ok) {
          const data = await response.json();
          console.log("DATa -----------------", data);
          setStripeData(data);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        setStripeData(null);
      }
    }
  };

  const appearance = {
    theme: "stripe",
  };

  return (
    <>
      <div id="form_submission">
        {StripeData == null ? (
          <Form onSubmit={handleSubmit} method="POST">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Donation Amount (USD)</Form.Label>
              <Form.Control
                required
                type="number"
                name="amount"
                placeholder="Enter Donation Amount"
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
            <Button
              variant="danger"
              type="button"
              style={{ marginTop: 15 }}
              onClick={() => router.push("/")}
            >
              Back
            </Button>
          </Form>
        ) : (
          <Elements
            stripe={stripePromise}
            options={{
              // passing the client secret obtained in step 2
              clientSecret: StripeData.clientSecret.toString(),
              // Fully customizable with appearance API.
              appearance: appearance,
            }}
          >
            <Checkout clientSecret={StripeData.clientSecret.toString()} />
          </Elements>
        )}
      </div>
    </>
  );
}
