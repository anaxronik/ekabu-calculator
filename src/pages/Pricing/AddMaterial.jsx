import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import firebase from "../../db/firebase";

export const AddMaterial = () => {
  const initMaterialData = {
    category: "",
    name: "",
    unit: "m2",
    price: 0,
  };
  const [newMaterial, setNewMaterial] = useState(initMaterialData);
  const [materialsCategory, setMaterialsCategory] = useState({});

  const inputHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setNewMaterial({ ...newMaterial, [id]: value });
  };

  const storeNewMaterial = () => {
    if (
      newMaterial.category &&
      newMaterial.name &&
      newMaterial.unit &&
      newMaterial.price
    ) {
      console.log("store new material");
      const todoRef = firebase.database().ref("materials");
      todoRef.push(newMaterial);
      setNewMaterial(initMaterialData);
    }
  };

  //   loading materials category from server
  useEffect(() => {
    const materialsRef = firebase.database().ref("materialsCategory");
    materialsRef.on("value", (snapshot) => {
      setMaterialsCategory(snapshot.val());
    });
  }, []);

  return (
    <div className={"mb-2"}>
      <Row className={"justify-content-md-center"}>
        <Col lg>
          <Form.Group controlId="category">
            <Form.Label>Категория</Form.Label>
            <Form.Control
              as="select"
              onChange={inputHandler}
              value={newMaterial.category}
            >
              {Object.keys(materialsCategory).map((key, index) => (
                <option key={index}>{materialsCategory[key]}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group controlId="name">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              placeholder="Название"
              value={newMaterial.name}
              onChange={inputHandler}
            />
          </Form.Group>
        </Col>

        <Col sm>
          <Form.Group controlId="unit">
            <Form.Label>Единицы</Form.Label>
            <Form.Control
              as="select"
              onChange={inputHandler}
              value={newMaterial.unit}
            >
              <option>m2</option>
              <option>Пог. М</option>
              <option>шт</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col sm>
          <Form.Group controlId="price" onChange={inputHandler}>
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              value={newMaterial.price}
              onChange={inputHandler}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit" onClick={storeNewMaterial}>
        Создать
      </Button>
    </div>
  );
};
