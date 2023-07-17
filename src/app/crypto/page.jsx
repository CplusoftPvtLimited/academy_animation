"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
import CoinbaseCommerceButton from "react-coinbase-commerce";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";

const page = () => {
  const router = useRouter();

  return (
    <div id="form_submission_btn">
      <CoinbaseCommerceButton
        checkoutId={"3447108b-f224-41b1-9cd5-1c33653af437"}
      />
      <Button
        id="form_submission_btn_back"
        variant="danger"
        onClick={() => router.push("/")}
      >
        Back
      </Button>
    </div>
  );
};

export default page;
