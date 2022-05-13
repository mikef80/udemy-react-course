import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div id={styles.UserItem}>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default UserItem;
