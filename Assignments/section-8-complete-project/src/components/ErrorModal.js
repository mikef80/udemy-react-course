import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  console.log("error");

  const blank = 0;

  const errormsg = blank
    ? `Please enter a valid name and age (non-empty values).`
    : `Please enter a valid age (>0)`;

  return (
    <div className={styles.ErrorModal}>
      <div className={styles.Error}>
        <div className={styles.ErrorHeader}>Invalid input</div>
        <div className={styles.ErrorBody}>{errormsg}</div>
        <button className={styles.ErrorButton}>Okay</button>
      </div>
    </div>
  );
};

export default ErrorModal;
