import DisplayUsers from "./DisplayUsers";

import styles from "./OutputForm.module.css";

const OutputForm = (props) => {
  return (
    <div className={styles.OutputForm}>
      <DisplayUsers />
    </div>
  );
};

export default OutputForm;
