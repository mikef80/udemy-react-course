import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  console.log("error");

  const errormsg =
    props.errorType === "emptyError"
      ? `Please enter a valid name and age (non-empty values).`
      : `Please enter a valid age (>0)`;

  return (
    <div className={styles.ErrorModal} onClick={() => props.onErrorLogged()}>
      <div className={styles.Error}>
        <div className={styles.ErrorHeader}>Invalid input</div>
        <div className={styles.ErrorBody}>{errormsg}</div>
        <button
          className={styles.ErrorButton}
          onClick={() => props.onErrorLogged()}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
