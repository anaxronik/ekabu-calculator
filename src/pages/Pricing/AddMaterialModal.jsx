import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { AddMaterial } from "./AddMaterial";

export const AddMaterialModal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>{children}</span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить материал</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMaterial />
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
};
