import React, { useState } from "react";
import { CalcGroup } from "../../components/CalcGroup";
import { Form, Button } from "react-bootstrap";
import firebase from "../../db/firebase";

export const AddMaterialCategory = () => {
  const [newCategory, setNewCategory] = useState("");

  const inputHandler = (event) => {
    setNewCategory(event.target.value);
  };

  const storeNewCategory = () => {
    if (newCategory) {
      const todoRef = firebase.database().ref("materialsCategory");
      todoRef.push(newCategory);
      setNewCategory("");
    }
  };

  return (
    <div className={"mb-2"}>
      <Form.Group controlId="name">
        <Form.Label>Название</Form.Label>
        <Form.Control
          type="text"
          placeholder="Название"
          value={newCategory}
          onChange={inputHandler}
        />
      </Form.Group>
      <Button
        classNames="align-bottom"
        variant="primary"
        type="submit"
        onClick={storeNewCategory}
      >
        Создать категорию
      </Button>
    </div>
  );
};
