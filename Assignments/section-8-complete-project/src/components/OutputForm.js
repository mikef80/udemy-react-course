import UserItem from "./UserItem";

import styles from "./OutputForm.module.css";

const OutputForm = (props) => {
  // console.log(props.items);

  const onClickRemove = (e) => {
    console.log("remove me!");
    console.log(e);
  };

  return (
    <div className={styles.OutputForm}>
      {props.items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
          removeItem={onClickRemove}
        />
      ))}
    </div>
  );
};

export default OutputForm;
