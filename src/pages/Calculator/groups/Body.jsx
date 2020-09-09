import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CalcGroup } from "../../../components/CalcGroup";

const bodyMaterial1 = [
  {
    id: 0,
    name: "ЛДСП Lamarty Древесные 16 мм + 0,4 мм кромкой",
    price: 12,
    union: "m2",
  },
  {
    id: 0,
    name: "ЛДСП Lamarty Древесные 16 мм + 2 мм кромкой",
    price: 12,
    union: "m2",
  },
  {
    id: 0,
    name: "ЛДСП Lamarty Древесные 26 мм + 0,4 мм кромкой",
    price: 12,
    union: "m2",
  },
];

export const Body = () => {
  fetch("https://ekabu-calculator.firebaseio.com/")
    .then((response) => response.json())
    .then((json) => console.log(json));

  let totalGroupPrice = 123456;
  return (
    <CalcGroup name={"Корпус"} totalPrice={totalGroupPrice}>
      <h4>Материал корпуса 1</h4>
      <Row>
        <Col sm={8} className={"mb-1"}>
          <Form.Control as="select">
            {bodyMaterial1.map((m) => {
              return (
                <option>
                  {m.name}. (Цена: {m.price} рублей за {m.union})
                </option>
              );
            })}
          </Form.Control>
        </Col>
        <Col>
          <Form.Control type="number" placeholder="Колличество" />
        </Col>
        <Col>
          <h5>{totalGroupPrice.toLocaleString()} руб.</h5>
        </Col>
      </Row>
    </CalcGroup>
  );
};
