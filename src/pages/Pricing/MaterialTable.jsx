import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import firebase from "../../db/firebase";

export const MaterialTable = () => {
  const [materialsCategory, setMaterialsCategory] = useState({});
  const [materials, setMaterials] = useState({});

  useEffect(() => {
    const materials = firebase.database().ref("materials");
    materials.on("value", (snapshot) => {
      setMaterials(snapshot.val());
    });

    const materialsRef = firebase.database().ref("materialsCategory");
    materialsRef.on("value", (snapshot) => {
      setMaterialsCategory(snapshot.val());
    });
  }, []);

  return (
    <div>
      {Object.keys(materialsCategory).map((categoryKey, index) => (
        <div key={index}>
          <h5 className={"mt-5"}>{materialsCategory[categoryKey]}</h5>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th lg="8">Название</th>
                <th>Единицы</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(materials).map((materialKey, index) => {
                if (
                  materials[materialKey].category ===
                  materialsCategory[categoryKey]
                ) {
                  return (
                    <tr key={index}>
                      <td>{materials[materialKey].name}</td>
                      <td>{materials[materialKey].unit}</td>
                      <td>{materials[materialKey].price}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </Table>
        </div>
      ))}
    </div>
  );
};
