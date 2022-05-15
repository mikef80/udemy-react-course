import React, { useState } from "react";

import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";
import ErrorModal from "./components/ErrorModal";

import "./App.css";

const DUMMY_ARRAY = [
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
];

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const saveUserHandler = (enteredUser) => {
    setUsers((users) => {
      return [enteredUser, ...users];
    });

    console.log(enteredUser);
    console.log(DUMMY_ARRAY);
  };

  const inputErrorHandler = (e) => {
    console.log(e);
    setError(e);
  };

  return (
    <div id="main">
      {error && (
        <ErrorModal onErrorLogged={inputErrorHandler} errorType={error} />
      )}
      <InputForm
        onSaveUser={saveUserHandler}
        onErrorLogged={inputErrorHandler}
      />
      <br />
      <OutputForm items={users} />
    </div>
  );
};

export default App;
