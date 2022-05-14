import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const output = `${props.name} (${props.age} ${
    Number(props.age) === 1 ? `year` : `years`
  } old)`;

  return (
    <div onClick={props.removeItem} className={styles.UserItem}>
      {output}
    </div>
  );
};

export default UserItem;
