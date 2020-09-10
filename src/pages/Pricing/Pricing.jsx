import React from "react";
import { AddMaterial } from "./AddMaterial";
import { AddMaterialCategory } from "./AddMaterialCategory";
import { MaterialTable } from "./MaterialTable";

export const Pricing = () => {
  return (
    <div>
      <AddMaterialCategory />
      <AddMaterial />
      <MaterialTable />
    </div>
  );
};
