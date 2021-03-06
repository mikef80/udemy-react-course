import React, { useState } from "react";

import styles from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  const [Username, updateUsername] = useState("");
  const [Age, updateAge] = useState("");

  const nameChangeHandler = (e) => {
    updateUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    updateAge(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (Age < 0) {
      props.onErrorLogged("ageError");
      return;
    } else if (!Age || !Username) {
      props.onErrorLogged("emptyError");
      return;
    }

    const user = {
      name: Username,
      age: Age,
    };

    props.onSaveUser(user);
    updateUsername("");
    updateAge("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div id={styles.AddUser}>
        <label>Username</label>
        <br />
        <input
          className="username"
          type="text"
          value={Username}
          onChange={nameChangeHandler}
        ></input>
        <br />
        <label>Age (Years)</label>
        <br />
        <input
          className="age"
          type="text"
          value={Age}
          onChange={ageChangeHandler}
        ></input>
        <br />
        <Button type="submit">Add User</Button>
        {/* <button onClick={onSubmit}>Add User</button> */}
      </div>
    </form>
  );
};

export default AddUser;
