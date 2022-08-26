import styles from "./UserItem.module.css";

const UserItem = (props) => {
  const output = `${props.name} (${props.age} ${
    Number(props.age) === 1 ? `year` : `years`
  } old)`;

  return (
    <li
      onClick={props.removeItem}
      className={styles.UserItem}
      key={props.id}
      id={props.id}
    >
      {output}
    </li>
  );
};

export default UserItem;
