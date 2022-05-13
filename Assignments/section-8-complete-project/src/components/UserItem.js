import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return <div id={styles.UserItem}>{props.id}</div>;
};

export default UserItem;
