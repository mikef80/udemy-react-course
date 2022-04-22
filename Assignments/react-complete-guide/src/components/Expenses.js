import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  let outputArr = [];
  props.array.forEach((item) => {
    let output = (
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    );
    outputArr.push(output);
  });

  let code = outputArr.join("");
  console.log(code);

  return (
    <div className="expenses">
      {/* <ExpenseItem
        title={props.array[0].title}
        amount={props.array[0].amount}
        date={props.array[0].date}
      />
      <ExpenseItem
        title={props.array[1].title}
        amount={props.array[1].amount}
        date={props.array[1].date}
      />
      <ExpenseItem
        title={props.array[2].title}
        amount={props.array[2].amount}
        date={props.array[2].date}
      />
      <ExpenseItem
        title={props.array[3].title}
        amount={props.array[3].amount}
        date={props.array[3].date}
      /> */}
      {code}
    </div>
  );
};

export default Expenses;
