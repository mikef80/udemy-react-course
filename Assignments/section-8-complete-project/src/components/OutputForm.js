import UserItem from "./UserItem";

import styles from "./OutputForm.module.css";

const OutputForm = (props) => {
  // console.log(props.items);

  const deleteItem = () => {
    alert("delete thsi item");
  };

  return (
    <div className={styles.OutputForm}>
      {props.items.map((item) => (
        <UserItem
          key={item.id}
          id={item.id}
          name={item.name}
          age={item.age}
          onClick={() => alert("click")}
        />
      ))}
    </div>
  );
};

export default OutputForm;
