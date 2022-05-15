import React, { useState } from "react";

import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";
import ErrorModal from "./components/ErrorModal";

import "./App.css";

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const saveUserHandler = (enteredUser) => {
    setUsers((users) => {
      return [enteredUser, ...users];
    });
  };

  const inputErrorHandler = (e) => {
    console.log(e);
    setError(e);
  };

  const removeItem = (e) => {
    console.log("remove this item please");
    console.log(e.target.id);
    const outputArray = users.filter((item) => item.id !== e.target.id);
    setUsers(outputArray);
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
      <OutputForm items={users} onRemoveItem={removeItem} />
    </div>
  );
};

export default App;
