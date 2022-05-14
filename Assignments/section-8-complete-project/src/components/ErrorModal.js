import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  console.log("error");
  return (
    <div className={styles.ErrorModal}>
      <div className={styles.Error}>
        <div className={styles.ErrorHeader}>hello</div>
      </div>
    </div>
  );
};

export default ErrorModal;
