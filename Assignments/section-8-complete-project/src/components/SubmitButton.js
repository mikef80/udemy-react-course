import "./SubmitButton.module.css";

const SubmitButton = (props) => {
  const onSubmit = (props) => {
    console.log("This is a submit click");
  };

  return (
    <div>
      <button onClick={onSubmit}>Add User</button>
    </div>
  );
};

export default SubmitButton;
