import React from "react";

import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";

import "./App.css";

const App = () => {
  return (
    <div id="main">
      <InputForm />
      <br />
      <OutputForm />
    </div>
  );
};

export default App;
