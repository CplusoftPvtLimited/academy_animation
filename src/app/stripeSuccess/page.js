"use client";
import React from "react";
import styles from "./styles.css";
import { useRouter } from "next/navigation";

export default function stripeSuccess() {
  const router = useRouter();
  const handleTryAgain = () => {
    // Perform actions to try again
    router.push("/");
  };

  return (
    <div className="container">
      <div className="centered">
        <div className={styles["success-dialog"]}>
          <div className="success-dialog">
            <h3>Success!</h3>
            <p>Your action was successful.</p>
            <button onClick={handleTryAgain}>Try Again</button>
          </div>
        </div>
      </div>
    </div>
  );
}
