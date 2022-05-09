import styles from "./DisplayUsers.module.css";

const DisplayUsers = () => {
  const onSubmit = () => {
    console.log("Clickety click!");
  };

  return (
    <div id={styles.DisplayUsers}>
      <div>Username</div>
      <input type='text'></input>
      <div>Age (Years)</div>
      <input type='text'></input>
      <br />
      <button onClick={onSubmit}>Add User</button>
    </div>
  );
};

export default DisplayUsers;
