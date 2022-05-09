import styles from "./AddUser.module.css";

const AddUser = () => {
  return (
    <div id={styles.AddUser}>
      <div>Username</div>
      <input type="text"></input>
      <div>Age (Years)</div>
      <input type="text"></input>
      <br />
      <button>Add User</button>
    </div>
  );
};

export default AddUser;
