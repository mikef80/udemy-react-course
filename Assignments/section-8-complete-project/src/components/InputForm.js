import Username from "./Username";
import AgeYears from "./AgeYears";
import SubmitButton from "./SubmitButton";

import styles from "./InputForm.module.css";

const InputForm = () => {
  return (
    <div className={styles.InputForm}>
      <Username />
      <AgeYears />
      <SubmitButton />
    </div>
  );
};

export default InputForm;
