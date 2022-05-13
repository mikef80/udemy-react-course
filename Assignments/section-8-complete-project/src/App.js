import React, { useState } from "react";

import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";

import "./App.css";

const App = (props) => {
  const [array, updateArray] = useState([
    {
      id: 1,
      name: "Mike",
      age: 42,
    },
    {
      id: 2,
      name: "Kate",
      age: 37,
    },
  ]);

  /* const array = [
    {
      id: 1,
      name: "Mike",
      age: 42,
    },
    {
      id: 2,
      name: "Kate",
      age: 37,
    },
  ]; */

  const saveUserHandler = (enteredUser) => {
    console.log(enteredUser);
    array.push(enteredUser);
    console.log(array);
    // updateArray(enteredUser);
  };

  return (
    <div id="main">
      <InputForm onSaveUser={saveUserHandler} />
      <br />
      <OutputForm items={array} />
    </div>
  );
};

export default App;
