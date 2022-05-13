import UserItem from "./UserItem";

import styles from "./OutputForm.module.css";

const OutputForm = (props) => {
  console.log(props.items);

  return (
    <div className={styles.OutputForm}>
      {/* <UserItem details={props.array[0]} /> */}
      {/* <UserItem id={props.array[0].id} /> */}
    </div>
  );
};

export default OutputForm;
