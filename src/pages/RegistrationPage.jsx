import React, { useState } from "react";
import createInDB from "../db/createInDB";
import readFromDB from "../db/readFromDB";

export const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const createAccount = () => {
    if (email) {
      console.log("Create account: ", email);
      createInDB("Todos", { email });

      setEmail("");
    }
  };

  console.log(readFromDB("todos"));

  return (
    <div className={"pt-5"}>
      <input
        placeholder="your@email.com"
        value={email}
        onChange={emailHandler}
      />
      <button className={"btn btn-primary"} onClick={createAccount}>
        REGISTRATION
      </button>
    </div>
  );
};
