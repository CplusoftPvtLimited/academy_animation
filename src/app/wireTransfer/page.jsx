"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function index() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="form_submission">
        <Button
          variant="success"
          onClick={handleShow}
          style={{ marginBottom: 15 }}
        >
          Open Wire Transfer Details
        </Button>
        <Button variant="danger" onClick={() => router.push("/")}>
          Back
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wire Transfer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Bank Name: </strong> Bank For Website
          </p>
          <p>
            <strong>Account Holder Name: </strong> Lorem Ipsum
          </p>
          <p>
            <strong>Account number: </strong> 0000-0000-0000-0000
          </p>
          <p>
            <strong>IBAN: </strong> LM0000-0000-0000-0000
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default index;
