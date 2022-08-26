import UserItem from "./UserItem";

import styles from "./OutputForm.module.css";

const OutputForm = (props) => {
  // console.log(props.items);

  return (
    <ul className={styles.OutputForm}>
      {props.items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
          removeItem={props.onRemoveItem}
        />
      ))}
    </ul>
  );
};

export default OutputForm;
