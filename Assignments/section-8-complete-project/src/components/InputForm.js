import AddUser from "./AddUser";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const saveUserHandler = (enteredUser) => {
    const user = {
      ...enteredUser,
      id: Math.random().toString(),
    };
    console.log(user);
    props.onSaveUser(user);
  };

  return (
    <div className={styles.InputForm}>
      <AddUser onSaveUser={saveUserHandler} />
    </div>
  );
};

export default InputForm;
