import AddUser from "./AddUser";

import styles from "./InputForm.module.css";

const InputForm = (props) => {
  const saveUserHandler = (enteredUser) => {
    const user = {
      ...enteredUser,
      id: Math.random().toString(),
      // key: Math.random().toString(),
    };
    props.onSaveUser(user);
  };

  // console.log(props.onErrorLogged);

  return (
    <div className={styles.InputForm}>
      <AddUser
        onSaveUser={saveUserHandler}
        onErrorLogged={props.onErrorLogged}
      />
    </div>
  );
};

export default InputForm;
