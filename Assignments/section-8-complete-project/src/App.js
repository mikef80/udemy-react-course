import React from "react";

import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";

import "./App.css";

const App = (props) => {
  const array = [];

  const saveUserHandler = (enteredUser) => {
    /* const user = {
      ...enteredUser,
      id: Math.random().toString(),
    }; */
    console.log(enteredUser);
    array.push(enteredUser);
    console.log(array);
  };

  return (
    <div id='main'>
      <InputForm onSaveUser={saveUserHandler} />
      <br />
      <OutputForm />
    </div>
  );
};

export default App;
