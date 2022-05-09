import "./SubmitButton.module.css";

const SubmitButton = () => {
  const onAddUser = () => {
    console.log("hello");
  };

  return (
    <div>
      <button onClick={onAddUser}>Add User</button>
    </div>
  );
};

export default SubmitButton;
