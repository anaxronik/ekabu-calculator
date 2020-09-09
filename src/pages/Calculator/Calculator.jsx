import React from "react";

import { CalcGroup } from "../../components/CalcGroup";
import { Body } from "./groups/Body";

export const Calculator = () => {
  return (
    <>
      <Body />
      <CalcGroup name="Корпус"></CalcGroup>
      <CalcGroup />
      <CalcGroup />
    </>
  );
};
