import React from "react";

import InputForm from "./components/InputForm";
import OutputForm from "./components/OutputForm";

import "./App.css";

const App = () => {
  const onClick = (props) => {
    console.log("this is a test");
    console.log(props);
  };

  return (
    <div id='main'>
      <InputForm />
      <br />
      <OutputForm />
    </div>
  );
};

export default App;
