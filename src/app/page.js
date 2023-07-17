"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Container } from "react-bootstrap";
import Image from "next/image";

const page = () => {
  const router = useRouter();

  return (
    <>
      <div style={{ position: "absolute", width: "100%" }}>
        <Image
          src="/payment_2.jpg"
          alt="iamge"
          width={800}
          height={800}
          style={{ width: "100%" }}
        />
      </div>
      <Container id="container">
        <div id="form_submission">
          <h1 style={{ fontSize: 48, marginBottom: 20, color: "#fff" }}>
            Payment Methods
          </h1>
          <Button
            variant={"primary"}
            style={{ marginTop: 15 }}
            onClick={() => router.push("http://localhost:3000/stripe")}
          >
            Stripe
          </Button>
          <Button
            variant={"success"}
            style={{ marginTop: 15 }}
            onClick={() => router.push("http://localhost:3000/crypto")}
          >
            Crypto
          </Button>
          <Button
            variant={"warning"}
            style={{ marginTop: 15 }}
            onClick={() => router.push("http://localhost:3000/wireTransfer")}
          >
            WireTransfer
          </Button>
        </div>
      </Container>
    </>
  );
};

export default page;
