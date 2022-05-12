import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Button from "./Button";

const AddUser = () => {
  const [Username, updateUsername] = useState("");
  const [Age, updateAge] = useState("");

  const nameChangeHandler = (e) => {
    updateUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    updateAge(e.target.value);
  };

  const onSubmit = (e) => {
    console.log("Clickety click!");

    e.preventDefault();

    const person = {
      name: Username,
      age: Age,
    };

    console.log(person);
    updateUsername("");
    updateAge("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div id={styles.AddUser}>
        <label>Username</label>
        <br />
        <input
          className='username'
          type='text'
          value={Username}
          onChange={nameChangeHandler}></input>
        <br />
        <label>Age (Years)</label>
        <br />
        <input
          className='age'
          type='text'
          value={Age}
          onChange={ageChangeHandler}></input>
        <br />

        {/* <button onClick={onSubmit}>Add User</button> */}
      </div>
    </form>
  );
};

export default AddUser;
