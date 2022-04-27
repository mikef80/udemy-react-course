import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYearValue, setFilterYearValue] = useState("2022");

  const filterChangeHandler = (value) => {
    // console.log(`filter changed to ${value}`);
    setFilterYearValue(value);
  };

  // console.log(props.items);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYearValue}
        onYearChange={filterChangeHandler}
      />
      <Card>
        {props.items.map((item) => {
          return (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <ExpenseItem
          title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        /> */}
      </Card>
    </Card>
  );
};

export default Expenses;
