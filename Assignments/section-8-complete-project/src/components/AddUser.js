import styles from "./AddUser.module.css";

const AddUser = () => {
  const onSubmit = () => {
    console.log("Clickety click!");
  };

  return (
    <div id={styles.AddUser}>
      <div>Username</div>
      <input type='text'></input>
      <div>Age (Years)</div>
      <input type='text'></input>
      <br />
      <button onClick={onSubmit}>Add User</button>
    </div>
  );
};

export default AddUser;
