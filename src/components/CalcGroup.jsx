import React, { useState } from "react";
import Card from "react-bootstrap/Card";

export const CalcGroup = ({ name, totalPrice, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const headerClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="mt-1">
      <Card.Header as="h5" onClick={headerClickHandler}>
        <div className="row d-flex justify-content-between">
          <div>{name ? name : "group name"}</div>
          <div>{totalPrice ? totalPrice.toLocaleString() + " руб." : ""}</div>
        </div>
      </Card.Header>
      {isOpen ? <Card.Body>{children}</Card.Body> : ""}
    </Card>
  );
};
